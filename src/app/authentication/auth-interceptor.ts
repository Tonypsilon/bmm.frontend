import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('/user')){
      return next.handle(req);
    }
    if(this.authenticationService.isLoggedIn) {
      const headers = req.headers.set('Cookie', 'JSESSIONID=' + this.authenticationService.jSessionId)
        .set('XSRF-TOKEN', '' + this.authenticationService.xsrfToken);
      req = req.clone({headers});
    }

    return next.handle(req).pipe(
      catchError( resp => this.handleErrorResponse(resp))
    );
  }

  handleErrorResponse(resp: HttpErrorResponse) {
    if(resp.status === 401 || resp.status === 403) {
      this.router.navigate(['/login']);
    }
    return throwError(() => new Error('Nicht authorisiert!'));
  }

}
