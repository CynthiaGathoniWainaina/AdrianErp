import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  serverUrl = 'http://68.183.79.24/';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse
    (localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.serverUrl}rest-auth/login/`, { username, password })
      .pipe(map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        }));
  }

//  isLoggedIn(){
  //  if (localStorage.getItem('currentUser')) {
    //  return true;
  //  }
  //  return false;
 // }

//  getAuthorizationToken() {
  //  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //  return currentUser.token;
//  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

 // private handleError(error: HttpErrorResponse) {
   // if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly.
     // console.log('An error occured:', error.error.message);

   // } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
     // console.error(`Backend returned code ${error.status},` + `body was: ${error.error}`);
  //  }

    // return an observable with a user-facing error message
   // this.errorData = {
   //   errorTitle: 'Oops! Request for document failed',
   //   errorDesc: 'Something bad happened. Please try again later.'
  //  };
  //  return throwError(this.errorData);
//  }
}
