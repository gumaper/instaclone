import { Component } from '@angular/core';

@Component({
    template: 
        `
            <div class="text-center">
                <h1>Page Not Found</h1>
                <img src="https://cdn.dribbble.com/users/366584/screenshots/2527274/404_1.gif">
                <h4 class="mt-4">The page you are looking for was moved, removed, renamed or might never existed.</h4>
            </div>
        `
})
export class NotFoundComponent { }