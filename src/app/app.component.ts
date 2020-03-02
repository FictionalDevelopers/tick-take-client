import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { checkAuth } from './auth/store/auth.actions';
import { AppState } from './store/app.state';

@Component({
  selector: 'tt-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(checkAuth());
  }
}
