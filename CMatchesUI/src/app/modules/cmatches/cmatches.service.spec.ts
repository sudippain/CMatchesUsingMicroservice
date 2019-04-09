import { TestBed } from '@angular/core/testing';

import { CmatchesService } from './cmatches.service';

describe('CmatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmatchesService = TestBed.get(CmatchesService);
    expect(service).toBeTruthy();
  });
});
