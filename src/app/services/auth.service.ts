import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginSub = new BehaviorSubject(false);
  loginObs = this.loginSub.asObservable();

  isUserLoggedIn(): Observable<boolean> {
    return this.loginObs;
  }

  logout() {
    localStorage.setItem('userLoggedIn', 'false');
    this.loginSub.next(false);
  }

  login() {
    localStorage.setItem('userLoggedIn', 'true');
    this.loginSub.next(true);
  }
}
