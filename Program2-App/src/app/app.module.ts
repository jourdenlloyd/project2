import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CustomerFormComponent,
    HomeContainerComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    HomeModule,
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
