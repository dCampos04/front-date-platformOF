import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AuthRequest } from '../interfaces/AuthRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(authRequest: AuthRequest): Observable<string> {
    return this.http.post<any>(`${this.apiUrl}/login`, authRequest);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

}
