import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Event, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent  {

  routerEvents$: Observable<Event>;

  constructor(private router: Router) {
    this.routerEvents$ = this.router.events;
  }

}
