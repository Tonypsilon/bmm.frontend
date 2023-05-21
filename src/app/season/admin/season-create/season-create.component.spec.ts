import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCreateComponent } from './season-create.component';

describe('SeasonCreateComponent', () => {
  let component: SeasonCreateComponent;
  let fixture: ComponentFixture<SeasonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
