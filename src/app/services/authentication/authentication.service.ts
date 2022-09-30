import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { StorageService } from '../storage/storage.service';

interface AuthResponse {
  jwt: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = `${environment.strapiUrl}/auth/local`;
  private loginTracker = new BehaviorSubject(this.checkIfLoggedIn());

  loggedInStatus$ = this.loginTracker.asObservable();

  constructor(private http: HttpClient, private ss: StorageService) {}

  login(identifier: string, password: string) {
    return this.http.post<AuthResponse>(this.url, { identifier, password });
  }

  register(username: string, email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.url}/register`, {
      username,
      email,
      password,
    });
  }

  checkIfLoggedIn() {
    return this.ss.getItem('loggedIn') === 'true';
  }

  persistUser(resp: AuthResponse) {
    [
      ['userId', resp.user.id],
      ['userEmail', resp.user.email],
      ['username', resp.user.username],
      ['loggedIn', 'true'],
      ['token', resp.jwt],
    ].forEach((item) => this.ss.setItem(item[0], item[1]));
    this.loginTracker.next(true);
  }

  getPersistedUser(): User {
    return {
      id: this.ss.getItem('userId') || '',
      username: this.ss.getItem('username') || '',
      email: this.ss.getItem('userEmail') || '',
    };
  }

  getPersistedToken(): string {
    return this.ss.getItem('token') || '';
  }

  logout() {
    ['userId', 'userEmail', 'username', 'loggedIn', 'token'].forEach((item) =>
      this.ss.removeItem(item)
    );
    this.loginTracker.next(false);
  }

  getAuthHeader() {
    return {
      headers: { Authorization: `Bearer ${this.getPersistedToken()}` },
    };
  }
}
