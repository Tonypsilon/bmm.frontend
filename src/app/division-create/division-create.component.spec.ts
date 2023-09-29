import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionCreateComponent } from './division-create.component';

describe('DivisionCreateComponent', () => {
  let component: DivisionCreateComponent;
  let fixture: ComponentFixture<DivisionCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisionCreateComponent]
    });
    fixture = TestBed.createComponent(DivisionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
