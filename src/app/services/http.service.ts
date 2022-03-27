import { baseAPIPath } from './../../config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  getAllCompaniesData() {
    return this.http
      .get<any>(`${baseAPIPath}/AllCompanies`)
      .pipe(catchError(this.handleError));
  }

  getDataForCompany(company: string) {
    return this.http
      .get<any>(`${baseAPIPath}GetCompanyDetails/${company}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
