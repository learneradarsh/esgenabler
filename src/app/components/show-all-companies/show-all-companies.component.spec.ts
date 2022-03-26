import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCompaniesComponent } from './show-all-companies.component';

describe('ShowAllCompaniesComponent', () => {
  let component: ShowAllCompaniesComponent;
  let fixture: ComponentFixture<ShowAllCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
