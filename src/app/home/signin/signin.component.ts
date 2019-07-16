import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {

    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value

    this.authService
      .authenticate(userName, password)
      .subscribe(() =>{
        console.log('autenticado'),
        this.router.navigate(['user', userName])
        err => {
          console.log(err),
          this.loginForm.reset(),
          alert('Invalid username or password')
        }
      })
  }

}
