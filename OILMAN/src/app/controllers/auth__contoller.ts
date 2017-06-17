import { Component, ViewChild } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import 'rxjs/add/operator/map';

import { urls__config } from '../configs/urls__config';
import { AppComponent } from "../app.component";

@Component({
  selector: "auth__pane",
  templateUrl: "../views/auth__view.html",
  styleUrls: [ "../styles/auth__style.scss" ]
})

export class auth__controller {
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  constructor(private http: Http, private router: Router, private app: AppComponent) { }

  propsAuth = {};

  preauth(email, password) {

    this.propsAuth = { email: email.value, password: password.value };

    this.captcha.execute();
  }

  auth(captchaResponse: string) {

    const body = Object.assign({captcha: captchaResponse}, this.propsAuth);

    this.http.post(urls__config.host + urls__config.auth, body, [  ])
      .map((res: Response) => res.json())
      .subscribe((res) => {

        if (res.error) {

          alert(res.error);

          this.captcha.reset();

          return;
        }

        sessionStorage.setItem('token', res.token);

        this.app.isLogged = true;

        this.router.navigateByUrl('/cabinet/myoffice');
      });
  }
}
