import { SearchService } from './../../services/search.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private readonly httpService: HttpService,
    private readonly route: ActivatedRoute
  ) {}
  news: any = {};
  companyBasicInfo: any = {};
  searchTerm: string = '';
  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.company))
      .subscribe((params) => {
        console.log(params);

        this.searchTerm = params.company;

        console.log(this.searchTerm);
      });

    this.httpService
      .getDataForCompany(this.searchTerm === '' ? 'Micro' : this.searchTerm)
      .subscribe((data) => {
        this.companyBasicInfo = data[0].basicInfo;
        this.news = data[0].news;
      });
  }
}
