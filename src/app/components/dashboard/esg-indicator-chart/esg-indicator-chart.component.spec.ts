import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgIndicatorChartComponent } from './esg-indicator-chart.component';

describe('EsgIndicatorChartComponent', () => {
  let component: EsgIndicatorChartComponent;
  let fixture: ComponentFixture<EsgIndicatorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsgIndicatorChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsgIndicatorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
