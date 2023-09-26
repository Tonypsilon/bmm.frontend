import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingDateComponent } from './playing-date.component';

describe('PlayingDateComponent', () => {
  let component: PlayingDateComponent;
  let fixture: ComponentFixture<PlayingDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingDateComponent]
    });
    fixture = TestBed.createComponent(PlayingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
