import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ])
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    let email = this.email.value;

    if(email == '') return;
    
    if (! this.authService.login(email)) {
      this.email.setErrors({wrongEmail: true});
      return;
    }

    this.router.navigate(['/']);
  }

  get email() {
    return this.form.get('email')!;
  }
}
