import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesPopupComponent } from './activites-popup.component';

describe('ActivitesPopupComponent', () => {
  let component: ActivitesPopupComponent;
  let fixture: ComponentFixture<ActivitesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitesPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
