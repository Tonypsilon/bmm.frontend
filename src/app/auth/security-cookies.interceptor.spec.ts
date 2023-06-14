import { TestBed } from '@angular/core/testing';

import { SecurityCookiesInterceptor } from './security-cookies.interceptor';

describe('SecurityCookiesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecurityCookiesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecurityCookiesInterceptor = TestBed.inject(SecurityCookiesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
