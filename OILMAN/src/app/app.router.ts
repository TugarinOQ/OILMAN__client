import { Routes } from "@angular/router";

import { home__controller } from "./controllers/home__controller";
import { auth__controller } from "./controllers/auth__contoller";
import { reg__controller } from "./controllers/reg__controller";
import { cabinet__myoffice__controller } from "./controllers/cabinet__myoffice__controller";

export const appRoutes: Routes = [
  {
    path: '',
    component: home__controller
  },
  {
    path: 'auth',
    component: auth__controller
  }
  ,
  {
    path: 'reg',
    component: reg__controller
  },
  {
    path: 'cabinet',
    component: cabinet__myoffice__controller
  }
];
