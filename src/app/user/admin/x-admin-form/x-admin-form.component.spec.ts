import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XAdminFormComponent } from './x-admin-form.component';

describe('XAdminFormComponent', () => {
  let component: XAdminFormComponent;
  let fixture: ComponentFixture<XAdminFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XAdminFormComponent]
    });
    fixture = TestBed.createComponent(XAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
