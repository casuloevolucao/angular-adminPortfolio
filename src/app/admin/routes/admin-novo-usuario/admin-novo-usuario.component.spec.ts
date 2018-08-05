import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNovoUsuarioComponent } from './admin-novo-usuario.component';

describe('AdminNovoUsuarioComponent', () => {
  let component: AdminNovoUsuarioComponent;
  let fixture: ComponentFixture<AdminNovoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNovoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNovoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
