import {  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private http:HttpClient) {}
  tok:string=''
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({ email, password }: any): Observable<any> {

    return this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/login',{email,password})
    
   
  }
}
  
