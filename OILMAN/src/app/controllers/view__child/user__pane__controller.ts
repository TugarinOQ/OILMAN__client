import { Component } from '@angular/core';

@Component({
  selector: "user__pane",
  template: `
    <div class="user__info">
      <div class="avatar"></div>
    </div>
  `,
  styles: [ `    
    .avatar {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: #FEBF39;
      border-radius: 50%;
      margin-right: 30px;
    }
    .user__info:after {
      content: '';
      display: inline-block;
      background: url('../../../assets/images/down.svg') no-repeat center center;
      width: 9px;
      height: 6px;
      position: absolute;
      top: 13px;
      right: 0;
    }
  ` ]
})

export class user__pane__controller {

  constructor() { }
}

@Component({
  selector: "guest__pane",
  template: `
    <a routerLink='/auth' class="link buttonInvisible">Вход</a>
    <a routerLink='/reg' class="link buttonYellow">Регистрация</a>
  `,
  styles: [ `` ]
})

export class guest__pane__controller {

  constructor() { }
}
