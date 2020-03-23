import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';

import { TokenInterceptor } from './auth/shared/auth.interceptor';
import { AuthEffects } from './auth/store/auth.effects';
import { ProfileEffects } from './profile/store/profile.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AuthEffects, ProfileEffects]),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    ProfileModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
