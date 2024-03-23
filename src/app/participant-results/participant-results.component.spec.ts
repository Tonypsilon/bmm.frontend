import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantResultsComponent } from './participant-results.component';

describe('ParticipantResultsComponent', () => {
  let component: ParticipantResultsComponent;
  let fixture: ComponentFixture<ParticipantResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantResultsComponent]
    });
    fixture = TestBed.createComponent(ParticipantResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
