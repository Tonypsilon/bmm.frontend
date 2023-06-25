import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAdminComponent } from './season-admin.component';

describe('SeasonAdminComponent', () => {
  let component: SeasonAdminComponent;
  let fixture: ComponentFixture<SeasonAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonAdminComponent]
    });
    fixture = TestBed.createComponent(SeasonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
