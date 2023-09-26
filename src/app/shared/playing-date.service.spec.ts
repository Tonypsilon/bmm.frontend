import { TestBed } from '@angular/core/testing';

import { PlayingDateService } from './playing-date.service';

describe('PlayingDateService', () => {
  let service: PlayingDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
