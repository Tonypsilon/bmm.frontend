import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamDivisionLinksComponent } from './edit-team-division-links.component';

describe('EditTeamDivisionLinksComponent', () => {
  let component: EditTeamDivisionLinksComponent;
  let fixture: ComponentFixture<EditTeamDivisionLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTeamDivisionLinksComponent]
    });
    fixture = TestBed.createComponent(EditTeamDivisionLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
