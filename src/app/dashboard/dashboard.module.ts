import {NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';

import {DashbaordRoutingModule} from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { LatestTransactionsComponent } from './components/latest-transactions/latest-transactions.component';
import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';

@NgModule({
  declarations: [
    // Declarations (Components / Directives) used from/within the Module
    DashboardComponent,
    NewPaymentComponent,
    LatestTransactionsComponent,
    AllTransactionsComponent,
    OverviewComponent,
    TransactionTableComponent
  ],
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule, DashbaordRoutingModule, BrowserAnimationsModule
  ],
  exports: [
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
