import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremanagerLoginComponent } from './storemanager-login.component';

describe('StoremanagerLoginComponent', () => {
  let component: StoremanagerLoginComponent;
  let fixture: ComponentFixture<StoremanagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoremanagerLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoremanagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
