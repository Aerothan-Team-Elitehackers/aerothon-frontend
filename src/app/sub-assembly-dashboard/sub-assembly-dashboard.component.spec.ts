import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAssemblyDashboardComponent } from './sub-assembly-dashboard.component';

describe('SubAssemblyDashboardComponent', () => {
  let component: SubAssemblyDashboardComponent;
  let fixture: ComponentFixture<SubAssemblyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubAssemblyDashboardComponent]
    });
    fixture = TestBed.createComponent(SubAssemblyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
