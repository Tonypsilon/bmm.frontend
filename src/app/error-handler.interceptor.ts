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
import {MessageService} from "./messages/message.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(resp => this.handleErrorResponse(resp))
    );
  }

  handleErrorResponse(resp: HttpErrorResponse) {
    if(resp.status === 401 || resp.status === 403) {
      this.messageService.error('Sie sind nicht authorisiert, um die gewünschte Aktion durchzuführen!');
      this.router.navigate(['/login']);
      return throwError(() => new Error('Nicht authorisiert!'));
    }
    if(resp.status === 400) {
      this.messageService.error(resp.error.message);
      return throwError(() => new Error('Bad Request!'));
    }
    this.messageService.error('Ein unbekanter Fehler ist aufgetreten.')
    return throwError(() => new Error('Unbekannter Fehler!'));
  }
}
