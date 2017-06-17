import { Component } from '@angular/core';

@Component({
  selector: "user__pane",
  template: `
    
  `,
  styles: [ `` ]
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
