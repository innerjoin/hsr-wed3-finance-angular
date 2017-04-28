import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent, RegisterComponent} from "../auth/components";
import {WelcomeComponent} from "./welcome.component";

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    // TODO: Add guard and routing (Register/Login) here...
    children: [
      { path: '', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent // TODO: Add initial router outlet dashboard component...
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeRoutingModule {}
