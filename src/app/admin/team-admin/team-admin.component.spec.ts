import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdminComponent } from './team-admin.component';

describe('TeamAdminComponent', () => {
  let component: TeamAdminComponent;
  let fixture: ComponentFixture<TeamAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAdminComponent]
    });
    fixture = TestBed.createComponent(TeamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
