import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { appRoutes } from './app.router';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';
import { home__controller } from "./controllers/home__controller";
import { auth__controller } from './controllers/auth__contoller';
import { reg__controller } from './controllers/reg__controller';
import { cabinet__controller } from "./controllers/cabinet__controller";

import { guest__pane__controller, user__pane__controller } from './controllers/view__child/user__pane__controller';
import { slider__controller} from "./controllers/view__child/slider__controller";
import { leftmenu__controller } from "./controllers/view__child/leftmenu__controller";

@NgModule({
  declarations: [
    AppComponent,
    home__controller,
    auth__controller,
    reg__controller,
    user__pane__controller,
    guest__pane__controller,
    slider__controller,
    leftmenu__controller,
    cabinet__controller
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReCaptchaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
