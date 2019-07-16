import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { FormFieldError } from './form-field-error/form-field-error.component';
import { FormErrorMessage } from './form-error-message/form-error-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotFoundComponent,
    FormFieldError,
    FormErrorMessage
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormErrorMessage,
    FormFieldError
  ]
})
export class ErrorsModule { }
