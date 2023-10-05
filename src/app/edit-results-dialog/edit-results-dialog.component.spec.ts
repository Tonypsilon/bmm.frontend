import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResultsDialogComponent } from './edit-results-dialog.component';

describe('EditResultsDialogComponent', () => {
  let component: EditResultsDialogComponent;
  let fixture: ComponentFixture<EditResultsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResultsDialogComponent]
    });
    fixture = TestBed.createComponent(EditResultsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
