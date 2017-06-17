import { Component } from '@angular/core';
import { Http } from "@angular/http";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged = false;
  year = new Date().getFullYear();

  constructor(private http: Http) {

    (!isNullOrUndefined(sessionStorage.getItem('token'))) ? this.isLogged = true : this.isLogged = false;
  }

  public isLogin(value) {

    return (value) ? this.isLogged = value : this.isLogged;
  }
}
