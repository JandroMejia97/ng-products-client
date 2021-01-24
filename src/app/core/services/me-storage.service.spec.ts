import { TestBed } from '@angular/core/testing';

import { MeStorageService } from './me-storage.service';

describe('StorageService', () => {
  let service: MeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
