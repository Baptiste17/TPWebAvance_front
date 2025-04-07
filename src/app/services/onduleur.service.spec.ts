import { TestBed } from '@angular/core/testing';

import { OnduleurService } from './onduleur.service';

describe('OnduleurService', () => {
  let service: OnduleurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnduleurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
