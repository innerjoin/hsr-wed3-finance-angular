import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OnlyLoggedInGuard } from '../auth/guards/only-logged-in.guard';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: OverviewComponent},
      { path: 'transactions', component: AllTransactionsComponent}
    ],
    canActivate: [OnlyLoggedInGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashbaordRoutingModule {}
