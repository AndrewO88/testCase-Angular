import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, POSTS } from './posts';


@Injectable({ providedIn: 'root' })
export class PostsService extends BehaviorSubject<Post[]> {

  constructor() {
    super(POSTS);
  }

  addPost(post: Post): void {
    if (!post) {
      return;
    }
    const state = this.getValue() || [];
    const newState = [...state, post];
    this.next(newState);
  }

  getById$(id: number): Observable<Post | null> {
    if (!id) {
      return;
    }
    return this.pipe(
      map(posts => posts.find(post => post.id === id))
    );
  }
}
