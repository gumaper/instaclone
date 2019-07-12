import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  template: 
    `
      <img 
        class="img-fluid" 
        [src]="url" 
        [alt]="description">
    `
})
export class PhotoComponent {

  @Input() url = ''
  @Input() description = ''

}
