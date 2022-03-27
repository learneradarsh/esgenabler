import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esg-indicator-chart',
  templateUrl: './esg-indicator-chart.component.html',
  styleUrls: ['./esg-indicator-chart.component.scss'],
})
export class EsgIndicatorChartComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  saleData = [
    { name: 'Mobiles', value: 105000 },
    { name: 'Laptop', value: 55000 },
    { name: 'AC', value: 15000 },
    { name: 'Headset', value: 150000 },
    { name: 'Fridge', value: 20000 },
  ];
}
