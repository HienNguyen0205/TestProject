import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { postDef } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  postList!: postDef[];

  constructor(
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe(res => {
      this.postList = res;
    })
  }

  handleDeletePost(id: number) {
    const index = this.postList.findIndex((post) => post.id === id);
    if (index != -1) {
      this.postList.splice(index, 1);
    }
  }
}
