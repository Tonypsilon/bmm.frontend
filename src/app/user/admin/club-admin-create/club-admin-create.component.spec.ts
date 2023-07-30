import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAdminCreateComponent } from './club-admin-create.component';

describe('ClubAdminCreateComponent', () => {
  let component: ClubAdminCreateComponent;
  let fixture: ComponentFixture<ClubAdminCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubAdminCreateComponent]
    });
    fixture = TestBed.createComponent(ClubAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
