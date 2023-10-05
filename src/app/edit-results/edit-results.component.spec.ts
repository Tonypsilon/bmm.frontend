import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResultsComponent } from './edit-results.component';

describe('EditResultsComponent', () => {
  let component: EditResultsComponent;
  let fixture: ComponentFixture<EditResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResultsComponent]
    });
    fixture = TestBed.createComponent(EditResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
