import { TestBed } from '@angular/core/testing';

import { AssemblyDashboardService } from './assembly-dashboard.service';

describe('AssemblyDashboardService', () => {
  let service: AssemblyDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblyDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
