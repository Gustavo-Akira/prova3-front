import { TestBed } from '@angular/core/testing';

import { FaltaServiceService } from './faltaservice.service';

describe('FaltaserviceService', () => {
  let service: FaltaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaltaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
