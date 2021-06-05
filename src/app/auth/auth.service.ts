import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { Userview } from './userview';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private viewuserurl = 'http://localhost:8080/api/auth/user';
  private deleteuserurl = 'http://localhost:8080/api/auth/user/delete';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

   
   getAllUsers(): Observable<Userview[]> {
  return this.http.get<Userview[]>(`${this.viewuserurl}`);
}

  deleteUser(id:Number): Observable<any> {
    return this.http.delete<any>(`${this.deleteuserurl}/${id}`);
  }



}
