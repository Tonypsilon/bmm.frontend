import { TestBed } from '@angular/core/testing';

import { EditTeamsDialogService } from './edit-teams-dialog.service';

describe('EditTeamsDialogService', () => {
  let service: EditTeamsDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTeamsDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
