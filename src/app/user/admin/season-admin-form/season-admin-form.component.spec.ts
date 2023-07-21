import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAdminFormComponent } from './season-admin-form.component';

describe('SeasonAdminFormComponent', () => {
  let component: SeasonAdminFormComponent;
  let fixture: ComponentFixture<SeasonAdminFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonAdminFormComponent]
    });
    fixture = TestBed.createComponent(SeasonAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
