import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAdminCreateComponent } from './season-admin-create.component';

describe('SeasonAdminCreateComponent', () => {
  let component: SeasonAdminCreateComponent;
  let fixture: ComponentFixture<SeasonAdminCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonAdminCreateComponent]
    });
    fixture = TestBed.createComponent(SeasonAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
