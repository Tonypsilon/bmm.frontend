import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDivisionLinkComponent } from './team-division-link.component';

describe('TeamDivisionLinkComponent', () => {
  let component: TeamDivisionLinkComponent;
  let fixture: ComponentFixture<TeamDivisionLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDivisionLinkComponent]
    });
    fixture = TestBed.createComponent(TeamDivisionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
