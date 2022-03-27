import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly httpService: HttpService) {}
  news: any = {};
  companyBasicInfo: any = {};
  ngOnInit(): void {
    this.httpService.getDataForCompany('Microso').subscribe((data) => {
      this.companyBasicInfo = data[0].basicInfo;
      this.news = data[0].news;
    });
  }
}
