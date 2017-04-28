import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RequestOptions} from '@angular/http';

import {AuthService, SecurityTokenStore} from './services';
import {AuthResourceService, AuthRequestOptions} from './resources';


import {LoginComponent, LogoutComponent,
  RegisterComponent} from "./components";
import {SharedModule} from "../shared/shared.module";
import { EqualValidatorDirective } from "./equal-validator.directive";

@NgModule({
  declarations: [
    // TODO: Add declarations here, if additional components are placed within the Auth module
    LoginComponent, LogoutComponent, RegisterComponent, EqualValidatorDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  providers: [ ]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {

    return {
      ngModule: AuthModule,
      providers: [
        AuthResourceService,
        AuthService,
        SecurityTokenStore,
        {
          provide: RequestOptions,
          useFactory: AuthRequestOptions.createFromTokenStore,
          deps: [SecurityTokenStore]
        }]
    };
  }
}
