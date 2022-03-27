import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent implements OnInit {
  @Input() kpiData: any;
  constructor() {}

  ngOnInit(): void {}
}
