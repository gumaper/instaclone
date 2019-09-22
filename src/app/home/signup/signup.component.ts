import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignupService } from './signup.service';
import { Signup } from './signup';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['../home.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platFormDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.maxLength(40)]],
      userName: ['', 
        [
          Validators.required, 
          Validators.maxLength(20)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    })

    this.platFormDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus()
  }

  signup() {

    const newUser = this.signupForm.getRawValue() as Signup
    this.signupService
      .signup(newUser)
      .subscribe(() => this.router.navigate(['']),
      err => console.log(err.message) 
      )
  }

}
