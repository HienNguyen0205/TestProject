import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { postDef } from '../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private postService: PostService
  ){}

  ngOnInit() {
    this.postService.getAllUsers('https://jsonplaceholder.typicode.com/posts')
    .subscribe((posts: postDef) => {
      
    })
  }
}
