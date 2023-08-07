import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleClubsFormComponent } from './multiple-clubs-form.component';

describe('MultipleClubsFormComponent', () => {
  let component: MultipleClubsFormComponent;
  let fixture: ComponentFixture<MultipleClubsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleClubsFormComponent]
    });
    fixture = TestBed.createComponent(MultipleClubsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
