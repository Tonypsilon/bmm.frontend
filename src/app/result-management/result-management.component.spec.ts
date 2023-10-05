import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultManagementComponent } from './result-management.component';

describe('ResultManagementComponent', () => {
  let component: ResultManagementComponent;
  let fixture: ComponentFixture<ResultManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultManagementComponent]
    });
    fixture = TestBed.createComponent(ResultManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
