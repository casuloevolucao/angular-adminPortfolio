import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageCategoriesPortfolioComponent } from './admin-page-categories-portfolio.component';

describe('AdminPageCategoriesPortfolioComponent', () => {
  let component: AdminPageCategoriesPortfolioComponent;
  let fixture: ComponentFixture<AdminPageCategoriesPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageCategoriesPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageCategoriesPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
