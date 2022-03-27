import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImpactCalculatorComponent } from './components/impact-calculator/impact-calculator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanySummaryComponent } from './components/dashboard/company-summary/company-summary.component';
import { ShowAllCompaniesComponent } from './components/show-all-companies/show-all-companies.component';
import { SettingsComponent } from './components/settings/settings.component';
import { IndicatorCardComponent } from './components/dashboard/indicator-card/indicator-card.component';
import { EsgIndicatorChartComponent } from './components/dashboard/esg-indicator-chart/esg-indicator-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    FooterComponent,
    ImpactCalculatorComponent,
    DashboardComponent,
    CompanySummaryComponent,
    ShowAllCompaniesComponent,
    SettingsComponent,
    IndicatorCardComponent,
    EsgIndicatorChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
