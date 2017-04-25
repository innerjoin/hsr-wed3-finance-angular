import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../core/services/navigation.service';
import { TransactionService } from '../../services/transaction.service';
import { TransactionResource } from '../../resources/transaction.resource';
import { TransactionModel } from '../../models/transaction.model';
import { TransactionQueryOptions } from '../../models/transaction-query-options.model';

import { TransactionTableComponent } from '../transaction-table/transaction-table.component';

import * as moment from 'moment';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss'],
  providers: [TransactionTableComponent]
})
export class LatestTransactionsComponent implements OnInit {

  private transactions: TransactionModel[];

  constructor(private navigationSvc: NavigationService, private transSvc: TransactionService) {
  }

  ngOnInit() {
    this.transSvc.lastTransactionChange.subscribe((t) => { 
      this.transactions = t.map((x) => x.toDto()); 
    });
    this.updateTransactionData();
  }

  showAll() {
    this.navigationSvc.goToAllTransactions();
  }

  updateTransactionData() {
    const from = moment().subtract(1, 'months').toISOString();
    const to = moment().toISOString();
    const options = new TransactionQueryOptions(3, 0, from, to);
    this.transSvc.updateLatestTransactions(options);
  }

  formatDate(dateString) {
    return moment(dateString).fromNow();
  }
}
