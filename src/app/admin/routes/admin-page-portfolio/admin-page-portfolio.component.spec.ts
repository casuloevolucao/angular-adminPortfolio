import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagePortfolioComponent } from './admin-page-portfolio.component';

describe('AdminPagePortfolioComponent', () => {
  let component: AdminPagePortfolioComponent;
  let fixture: ComponentFixture<AdminPagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
