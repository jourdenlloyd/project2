import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HomeComponent } from './home/home.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    RouterModule.forRoot([appRoutes]),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
