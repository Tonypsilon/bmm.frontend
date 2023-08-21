import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueManagementFormComponent } from './venue-management-form.component';

describe('VenueManagementFormComponent', () => {
  let component: VenueManagementFormComponent;
  let fixture: ComponentFixture<VenueManagementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenueManagementFormComponent]
    });
    fixture = TestBed.createComponent(VenueManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
