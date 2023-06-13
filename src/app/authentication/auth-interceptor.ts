import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from "../shared/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private tokenExtractor: HttpXsrfTokenExtractor) {
  }

  cookieHeaderName = 'X-XSRF-TOKEN';

  /**
   * Done as in common.http.xsrf.ts from Angular
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});
    if(req.method != 'GET' && req.method != 'HEAD') {
      let xsrfToken = this.tokenExtractor.getToken() as string;
      if(xsrfToken != null && !req.headers.has(this.cookieHeaderName)) {
        req = req.clone({headers: req.headers.set(this.cookieHeaderName, xsrfToken)});
      }
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
