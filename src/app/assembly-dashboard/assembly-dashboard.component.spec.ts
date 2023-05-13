import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyDashboardComponent } from './assembly-dashboard.component';

describe('AssemblyDashboardComponent', () => {
  let component: AssemblyDashboardComponent;
  let fixture: ComponentFixture<AssemblyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssemblyDashboardComponent]
    });
    fixture = TestBed.createComponent(AssemblyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
