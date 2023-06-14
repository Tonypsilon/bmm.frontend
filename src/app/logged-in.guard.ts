import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  if(!authService.isAuthenticated) {
    return router.parseUrl('/login');
  }
  return true;
};
