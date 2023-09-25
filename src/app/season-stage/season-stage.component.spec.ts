import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonStageComponent } from './season-stage.component';

describe('SeasonStageComponent', () => {
  let component: SeasonStageComponent;
  let fixture: ComponentFixture<SeasonStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonStageComponent]
    });
    fixture = TestBed.createComponent(SeasonStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
