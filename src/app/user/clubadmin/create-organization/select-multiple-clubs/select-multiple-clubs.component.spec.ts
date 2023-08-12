import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleClubsComponent } from './select-multiple-clubs.component';

describe('SelectMultipleClubsComponent', () => {
  let component: SelectMultipleClubsComponent;
  let fixture: ComponentFixture<SelectMultipleClubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMultipleClubsComponent]
    });
    fixture = TestBed.createComponent(SelectMultipleClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
