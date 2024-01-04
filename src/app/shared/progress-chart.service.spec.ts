import { TestBed } from '@angular/core/testing';

import { ProgressChartService } from './progress-chart.service';

describe('ProgressChartService', () => {
  let service: ProgressChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
