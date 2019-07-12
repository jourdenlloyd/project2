import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BecomeWalkerComponent } from './become-walker/become-walker.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FrontScreenComponent } from './front-screen/front-screen.component';

@NgModule({
  declarations: [LoginComponent, BecomeWalkerComponent, SignUpComponent, FrontScreenComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
