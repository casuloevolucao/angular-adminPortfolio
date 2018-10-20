import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageHomeComponent } from './admin-page-home.component';

describe('AdminPageHomeComponent', () => {
  let component: AdminPageHomeComponent;
  let fixture: ComponentFixture<AdminPageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
