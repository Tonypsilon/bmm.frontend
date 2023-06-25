import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(resp => this.handleErrorResponse(resp))
    );
  }

  handleErrorResponse(resp: HttpErrorResponse) {
    if(resp.status === 401 || resp.status === 403) {
      this.router.navigate(['/login']);
      return throwError(() => new Error('Nicht authorisiert!'));
    }
    if(resp.status === 400) {
      return throwError(() => new Error('Bad Request!'));
    }
    return throwError(() => new Error('Unbekannter Fehler!'));
  }
}
