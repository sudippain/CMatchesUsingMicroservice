import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
export const TOKEN_NAME:string = "jwt_token";

@Injectable()
export class AuthenticationService {

  authServiceEndpoint:string = "http://localhost:8089/api/v1/userservice";
  token:string;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  registerUser(newUser) {
    const url = `${this.authServiceEndpoint}/register`;
      // this.snackBar.open('Registered Successfuly!', '', {
      //   duration: 1000
      // });
    return this.http.post(url, newUser, {responseType: 'text'});
  }

  loginUser(user):Observable<any> {
    const url = `${this.authServiceEndpoint}/login`;
    return this.http.post(url, user);
  }

  setToken(token:string) {
    return localStorage.setItem(TOKEN_NAME, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  deleteToken() {
    return localStorage.removeItem(TOKEN_NAME);
  }

  getTokenExpirationDate(token: string) {
    const decoded = jwt_decode(token);
    if(decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) {
      token = this.getToken();
    }
    if(!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if(date === undefined || date === null) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}
