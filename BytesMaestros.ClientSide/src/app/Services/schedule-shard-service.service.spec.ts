import { TestBed } from '@angular/core/testing';

import { ScheduleShardServiceService } from './schedule-shard-service.service';

describe('ScheduleShardServiceService', () => {
  let service: ScheduleShardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleShardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
