import { TestBed } from '@angular/core/testing';

import { LuxuiService } from './luxui.service';

describe('LuxuiService', () => {
  let service: LuxuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuxuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
