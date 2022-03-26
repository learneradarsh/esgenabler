import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showLogIn: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.showLogIn = this.authService.isUserLoggedIn();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
