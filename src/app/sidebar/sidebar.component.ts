import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  constructor(public posts$: PostsService) {}
}
