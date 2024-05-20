import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { httpOptions } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: httpOptions): Observable<T> {
    return this.httpClient.get(url, options) as Observable<T>;
  }

  post<T>(url: string, body: any, options: httpOptions): Observable<T> {
    return this.httpClient.post(url, body, options) as Observable<T>;
  }

  put<T>(url: string, body: any, options: httpOptions): Observable<T> {
    return this.httpClient.post(url, body, options) as Observable<T>;
  }
}
