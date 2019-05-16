import { TestBed } from '@angular/core/testing';

import { GlobalAlertHandlerService } from './global-alert-handler.service';

describe('GlobalAlertHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalAlertHandlerService = TestBed.get(GlobalAlertHandlerService);
    expect(service).toBeTruthy();
  });
});
