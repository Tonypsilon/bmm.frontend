import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamsDialogComponent } from './edit-teams-dialog.component';

describe('EditTeamsDialogComponent', () => {
  let component: EditTeamsDialogComponent;
  let fixture: ComponentFixture<EditTeamsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTeamsDialogComponent]
    });
    fixture = TestBed.createComponent(EditTeamsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
