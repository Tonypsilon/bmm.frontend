import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SecurityCookiesInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    private tokenExtractor: HttpXsrfTokenExtractor) {}

  cookieHeaderName = 'X-XSRF-TOKEN';

  /**
   * Done as in common.http.xsrf.ts from Angular
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});
    if(req.method != 'GET' && req.method != 'HEAD') {
      console.log('neither get nor head');
      let xsrfToken = this.tokenExtractor.getToken() as string;
      if(xsrfToken != null && !req.headers.has(this.cookieHeaderName)) {
        req = req.clone({headers: req.headers.set(this.cookieHeaderName, xsrfToken)});
      }
    }
    return next.handle(req);
  }

}
