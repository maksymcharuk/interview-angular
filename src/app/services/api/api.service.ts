import { HttpClient, HttpEvent, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.strapiUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: any): Observable<HttpEvent<T>> {
    return this.http.get<T>(`${this.baseUrl}${url}`, options);
  }

  post<T>(url: string, data: any, options?: any): Observable<HttpEvent<T>> {
    return this.http.post<T>(`${this.baseUrl}${url}`, data, options);
  }

  put<T>(url: string, data: any, options?: any): Observable<HttpEvent<T>> {
    return this.http.put<T>(`${this.baseUrl}${url}`, data, options);
  }
}
