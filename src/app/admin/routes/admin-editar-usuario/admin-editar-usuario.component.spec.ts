import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarUsuarioComponent } from './admin-editar-usuario.component';

describe('AdminEditarUsuarioComponent', () => {
  let component: AdminEditarUsuarioComponent;
  let fixture: ComponentFixture<AdminEditarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
