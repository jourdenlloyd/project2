import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';





@Injectable({
    providedIn: 'root'
  })
export class AuthenticationService {

    url = 'http://localhost:8080/Program2App';
    // private currentUserSubject: BehaviorSubject<Principal>;
    // currentUser$: Observable<Principal>;

    constructor(private httpClient: HttpClient) {
    //   this.currentUserSubject = new BehaviorSubject<Principal>(null);
    //   this.currentUser$ = this.currentUserSubject.asObservable();
    }

    // get currentUserValue(): Principal {
    //   return this.currentUserSubject.value;
    // }

    authenticateUser = (username: string, password: string) => {
      return this.httpClient.post(`${this.url}/user`, { username, password }).toPromise().then((resp: any) => {
          let respBody = resp.body as User;

          let user = new User(
                            respBody.userId,
                            respBody.username,
                            respBody.userRole,
                            respBody.fullname,
                            respBody.password

          );

          console.log(user);
      });
    }
  }
