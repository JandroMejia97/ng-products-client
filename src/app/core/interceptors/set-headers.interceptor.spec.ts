import { TestBed } from '@angular/core/testing';

import { SetHeadersInterceptor } from './set-headers.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetHeadersInterceptor = TestBed.inject(SetHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
