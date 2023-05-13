import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationDashboardComponent } from './fabrication-dashboard.component';

describe('FabricationDashboardComponent', () => {
  let component: FabricationDashboardComponent;
  let fixture: ComponentFixture<FabricationDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabricationDashboardComponent]
    });
    fixture = TestBed.createComponent(FabricationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
