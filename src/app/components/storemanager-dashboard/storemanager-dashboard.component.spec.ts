import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremanagerDashboardComponent } from './storemanager-dashboard.component';

describe('StoremanagerDashboardComponent', () => {
  let component: StoremanagerDashboardComponent;
  let fixture: ComponentFixture<StoremanagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoremanagerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoremanagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
