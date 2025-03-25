import { TestBed } from '@angular/core/testing';

import { PerezUiToolkitService } from './perez-ui-toolkit.service';

describe('PerezUiToolkitService', () => {
  let service: PerezUiToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerezUiToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
