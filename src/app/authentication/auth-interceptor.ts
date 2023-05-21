import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from "../shared/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var modifiedRequest = req;
    if(this.authenticationService.jSessionId) {
      modifiedRequest = modifiedRequest.clone({
        headers: modifiedRequest.headers.set('Cookie', 'JSESSIONID=' + this.authenticationService.jSessionId)
      });
    }
    if(this.authenticationService.xsrfToken) {
      modifiedRequest = modifiedRequest.clone({
        headers: modifiedRequest.headers.set('Cookie', 'XSRF-TOKEN=' + this.authenticationService.xsrfToken)
        .set('XSRF-TOKEN', '' + this.authenticationService.xsrfToken)
      });
    }

    return next.handle(modifiedRequest).pipe(
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
