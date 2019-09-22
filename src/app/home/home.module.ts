import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ErrorsModule } from '../shared/components/errors/errors.module';

@NgModule({
  declarations: [
    SigninComponent, 
    HomeComponent, 
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ErrorsModule
  ]
})
export class HomeModule { }
