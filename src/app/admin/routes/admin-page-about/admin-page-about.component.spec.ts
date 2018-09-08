import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageAboutComponent } from './admin-page-about.component';

describe('AdminPageAboutComponent', () => {
  let component: AdminPageAboutComponent;
  let fixture: ComponentFixture<AdminPageAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
