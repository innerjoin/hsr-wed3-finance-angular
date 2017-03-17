import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {DashbaordRoutingModule} from "./dashboard-routing.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';

@NgModule({
  declarations: [
    // Declarations (Components / Directives) used from/within the Module
    DashboardComponent,
    NewPaymentComponent
  ],
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule, DashbaordRoutingModule
  ],
  exports: [
    DashboardComponent, // evtl
    NewPaymentComponent  // evtl
  ],
  providers: [
    // DI Providers (Services, Tokens, Factories...), may be instantiated multiple times
  ]
})
export class DashboardModule {
  static forRoot(config?:{}) : ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
  }

}
