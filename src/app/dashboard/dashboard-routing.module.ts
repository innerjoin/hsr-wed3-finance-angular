import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, // TODO: Add initial router outlet dashboard component...
    children: [
      // TODO: Add routing path for dashboard here...
      { path: '', component: NewPaymentComponent }
    ]
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
