import { TestBed } from '@angular/core/testing';

import { XhrInterceptor } from './xhr.interceptor';

describe('XhrInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      XhrInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: XhrInterceptor = TestBed.inject(XhrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
