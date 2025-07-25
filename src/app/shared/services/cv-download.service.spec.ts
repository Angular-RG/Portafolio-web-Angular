import { TestBed } from '@angular/core/testing';

import { CvDownloadService } from './cv-download.service';

describe('CvDownloadService', () => {
  let service: CvDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
