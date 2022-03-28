import { TestBed } from '@angular/core/testing';

import { PermissionProjectGuard } from './permission-project.guard';

describe('PermissionProjectGuard', () => {
  let guard: PermissionProjectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionProjectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
