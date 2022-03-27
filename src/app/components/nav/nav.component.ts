import { SearchService } from './../../services/search.service';
import { HttpService } from './../../services/http.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showLogOut: boolean = false;
  // searchTerm: string = '';

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe((data) => {
      this.showLogOut = data;
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  handleSearch(searchString: string) {
    this.router
      .navigate(['/dashboard'], {
        queryParams: { company: searchString },
      })
      .then(() => {
        window.location.reload();
      });
  }
}
