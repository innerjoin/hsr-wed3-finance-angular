import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';

import { DashbaordRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { LatestTransactionsComponent } from './components/latest-transactions/latest-transactions.component';
import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';

import { TransactionService} from './services/transaction.service';
import { TransactionResource } from './resources/transaction.resource';
import { OnlyLoggedInGuard } from '../auth/guards/only-logged-in.guard';

@NgModule({
  declarations: [
    DashboardComponent,
    NewPaymentComponent,
    LatestTransactionsComponent,
    AllTransactionsComponent,
    OverviewComponent,
    TransactionTableComponent
  ],
  imports: [
    SharedModule,
    DashbaordRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [
    OnlyLoggedInGuard,
    TransactionService,
    TransactionResource
  ]
})
export class DashboardModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
  }
}
