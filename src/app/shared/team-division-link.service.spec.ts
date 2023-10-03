import { TestBed } from '@angular/core/testing';

import { TeamDivisionLinkService } from './team-division-link.service';

describe('TeamDivisionLinkService', () => {
  let service: TeamDivisionLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDivisionLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
