import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-form-error-message',
    template: `
        <small class="text-danger d-block mt-2">
            {{ text }}
        </small>  
    `
})
export class FormErrorMessage { 

    @Input() text = ''
}