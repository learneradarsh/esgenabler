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
  environmentalModel: any = {};
  socialModel: any = {};
  governanceModel: any = {};
  noDataCondition: boolean = true;
  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.company))
      .subscribe((params) => {
        this.searchTerm = params.company;
        console.log(this.searchTerm);
      });

    this.httpService
      .getDataForCompany(this.searchTerm === '' ? 'Micro' : this.searchTerm)
      .subscribe((data) => {
        if (data.length === 0) {
          this.noDataCondition = true;
        } else {
          this.noDataCondition = false;
        }
        this.companyBasicInfo = data[0].basicInfo;
        this.news = data[0].news;
        this.environmentalModel = data[0].environmentalModel;
        this.socialModel = data[0].socialModel;
        this.governanceModel = data[0].governanceModel;
      });
  }
}
