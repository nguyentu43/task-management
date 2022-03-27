import { TestBed } from '@angular/core/testing';

import { EditProjectGuard } from './edit-project.guard';

describe('EditProjectGuard', () => {
  let guard: EditProjectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditProjectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
