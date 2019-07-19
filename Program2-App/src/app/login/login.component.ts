import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login: FormGroup;
  // submit = false;
  // username: string;
  // password: string;

  // getFormValues() {
  //   return this.login.controls;
  // }

 
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // onSubmit = () => {
  //   this.submit = true;
  //   let user = this.authenticationService.authenticateUser
  // }
}
