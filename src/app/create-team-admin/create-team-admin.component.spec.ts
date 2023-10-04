import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamAdminComponent } from './create-team-admin.component';

describe('CreateTeamAdminComponent', () => {
  let component: CreateTeamAdminComponent;
  let fixture: ComponentFixture<CreateTeamAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTeamAdminComponent]
    });
    fixture = TestBed.createComponent(CreateTeamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
