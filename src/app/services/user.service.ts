import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { msgDef, userDef } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getAllUsers(url: string): Observable<userDef[]> {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  }

  handleLogin(url: string, body: any): Observable<msgDef> {
    return this.apiService.post<msgDef>(
      url,
      body,
      {
        responseType: 'json',
      }
    );
  }
}
