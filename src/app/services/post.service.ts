import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, catchError } from 'rxjs';
import { postDef } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private apiService: ApiService
  ) {}

  getAllPosts(): Observable<postDef[]>{
    return this.apiService.get('http://localhost:8080/api/post/getAllPost', {
      responseType: 'json',
    });
  }
}
