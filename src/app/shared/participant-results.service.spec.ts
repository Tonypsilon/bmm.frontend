import { TestBed } from '@angular/core/testing';

import { ParticipantResultsService } from './participant-results.service';

describe('ParticipantResultsService', () => {
  let service: ParticipantResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
