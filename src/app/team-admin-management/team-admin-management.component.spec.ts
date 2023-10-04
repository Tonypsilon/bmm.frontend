import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdminManagementComponent } from './team-admin-management.component';

describe('TeamAdminManagementComponent', () => {
  let component: TeamAdminManagementComponent;
  let fixture: ComponentFixture<TeamAdminManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAdminManagementComponent]
    });
    fixture = TestBed.createComponent(TeamAdminManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
