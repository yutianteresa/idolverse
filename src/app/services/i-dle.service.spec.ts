import { TestBed } from '@angular/core/testing';

import { IDleService } from './i-dle.service';

describe('IDleService', () => {
  let service: IDleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IDleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
