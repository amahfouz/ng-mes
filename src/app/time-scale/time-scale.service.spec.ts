/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeScaleService } from './time-scale.service';

describe('Service: TimeScale', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeScaleService]
    });
  });

  it('should ...', inject([TimeScaleService], (service: TimeScaleService) => {
    expect(service).toBeTruthy();
  }));
});
