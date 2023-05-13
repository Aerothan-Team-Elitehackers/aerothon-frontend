import { TestBed } from '@angular/core/testing';

import { FabricationDashboardService } from './fabrication-dashboard.service';

describe('FabricationDashboardService', () => {
  let service: FabricationDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabricationDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
