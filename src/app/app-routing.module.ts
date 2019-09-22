import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';

import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {
      path: '',
      component: SigninComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'signup',
      component: SignupComponent
    }
  ] },
  { path: 'user/:userName', component: PhotoListComponent },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
