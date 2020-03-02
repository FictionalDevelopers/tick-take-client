import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { logout } from '../../auth/store/auth.actions';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private store: Store<AppState>) {}

  logout() {
    this.store.dispatch(logout());
  }
}
