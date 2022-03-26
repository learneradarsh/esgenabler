import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('userLoggedIn') === 'true') {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.setItem('userLoggedIn', 'false');
  }

  login() {
    localStorage.setItem('userLoggedIn', 'true');
  }
}
