import { Component, ViewChild } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import 'rxjs/add/operator/map';

import { urls__config } from '../configs/urls__config';

@Component({
  selector: "reg__pane",
  templateUrl: "../views/reg__view.html",
  styleUrls: [ "../styles/reg__style.scss" ]
})

export class reg__controller {
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  constructor(private http: Http, private router: Router) { }

  propsReg = {};

  prereg(email, password) {

    this.propsReg = { email: email.value, password: password.value };

    this.captcha.execute();
  }

  reg(captchaResponse: string) {

    const body = Object.assign({captcha: captchaResponse}, this.propsReg);

    this.http.post(urls__config.host + urls__config.reg, body, [  ])
      .map((res: Response) => res.json())
      .subscribe((res) => {

        if (res.error) {

          alert(res.error);

          this.captcha.reset();

          return;
        }

        this.router.navigateByUrl('/auth');
      });
  }
}
