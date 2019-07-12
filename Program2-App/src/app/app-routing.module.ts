import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { BecomeWalkerComponent } from './home/become-walker/become-walker.component';

export const appRoutes: Routes = [

    {
      path: '',
      component: HomeComponent,
      children: [
          { path: 'login', component: LoginComponent },
          { path: 'signup', component: SignUpComponent },
          { path: 'becomewalker', component: BecomeWalkerComponent },
      ]
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
