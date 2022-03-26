import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
