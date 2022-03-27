import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-card',
  templateUrl: './indicator-card.component.html',
  styleUrls: ['./indicator-card.component.scss'],
})
export class IndicatorCardComponent implements OnInit {
  @Input() indicatorInfo: string;
  constructor() {}

  ngOnInit(): void {}
}
