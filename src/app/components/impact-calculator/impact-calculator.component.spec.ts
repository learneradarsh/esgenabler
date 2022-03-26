import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactCalculatorComponent } from './impact-calculator.component';

describe('ImpactCalculatorComponent', () => {
  let component: ImpactCalculatorComponent;
  let fixture: ComponentFixture<ImpactCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
