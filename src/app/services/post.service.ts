import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { postDef } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private apiService: ApiService
  ) {}

  getAllUsers(url: string): Observable<postDef>{
    return this.apiService.get(url, {
      responseType: 'json'
    })
  }
}
