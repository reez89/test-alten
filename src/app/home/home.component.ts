import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../interfaces/post.interface';
import { posts } from '../mock-data/mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  posts: PostInterface[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.posts = posts;
  }

}
