import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    ),
    password: new FormControl(''),
  });

  onSubmit() {
    const req = {
      email_id: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    if (req.email_id === 'admin@psnext.com' && req.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials, Please try again');
      this.loginForm.reset();
    }
  }
}
