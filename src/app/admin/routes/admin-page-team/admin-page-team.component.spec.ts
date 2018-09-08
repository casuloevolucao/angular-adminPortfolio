import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageTeamComponent } from './admin-page-team.component';

describe('AdminPageTeamComponent', () => {
  let component: AdminPageTeamComponent;
  let fixture: ComponentFixture<AdminPageTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
