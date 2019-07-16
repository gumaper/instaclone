import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-field-error',
    template: `
        <small class="text-danger">
            {{ errorMessage }}
        </small>    
    `
})
export class FormFieldError {

    @Input('form-control') formControl: FormControl

    public get errorMessage(): string | null {
        if (this.mustShowErrorMessage()) {
            return this.getErrorMessage()
        } else {
            return null
        }
    }

    private mustShowErrorMessage(): boolean {
        return this.formControl.invalid && this.formControl.touched
    }

    private getErrorMessage(): string {
        if(this.formControl.errors.required) {
            return 'Dado obrigátorio'
        }
        else if(this.formControl.errors.email) {
            return 'Email inválido'
        }
        else if(this.formControl.errors.minlength) {
            const requiredMinLength = this.formControl.errors.minlength.requiredLength;
            return `minímo ${requiredMinLength} caracteres`;
        }
        else if(this.formControl.errors.maxlength) {
            const requiredMaxLength = this.formControl.errors.maxlength.requiredLength
            return `máximo ${ requiredMaxLength } caracteres`
        }
        
    }
 }