import { TestBed } from '@angular/core/testing';

import { TaskprogressService } from './taskprogress.service';

describe('TaskprogressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskprogressService = TestBed.get(TaskprogressService);
    expect(service).toBeTruthy();
  });
});
