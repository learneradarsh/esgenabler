import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-companies',
  templateUrl: './show-all-companies.component.html',
  styleUrls: ['./show-all-companies.component.scss'],
})
export class ShowAllCompaniesComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  allCompaniesData: any[] = [];

  ngOnInit(): void {
    this.httpService.getAllCompaniesData().subscribe((data) => {
      this.allCompaniesData = [...data];
    });
  }
}
