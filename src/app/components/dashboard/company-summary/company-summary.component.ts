import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-summary',
  templateUrl: './company-summary.component.html',
  styleUrls: ['./company-summary.component.scss'],
})
export class CompanySummaryComponent implements OnInit {
  @Input() companyInfo: any = {};
  constructor() {}

  ngOnInit(): void {}

  printData() {
    window.print();
  }
}
