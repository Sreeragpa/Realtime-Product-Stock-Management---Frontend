import { TestBed } from '@angular/core/testing';

import { StoremanagerService } from './storemanager.service';

describe('StoremanagerService', () => {
  let service: StoremanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoremanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
