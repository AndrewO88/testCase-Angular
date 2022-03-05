import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../posts';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  post$: Observable<Post | null>;

  constructor(
    route: ActivatedRoute,
    postsService: PostsService,
  ) {
    this.post$ = route.params.pipe(
      filter((id) => !!id),
      switchMap(({ id }) => postsService.getById$(+id))
    );
  }

}
