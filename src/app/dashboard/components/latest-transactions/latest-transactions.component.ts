import { Component, OnInit } from '@angular/core';
import { NavigationService} from '../../../core/services/navigation.service';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import * as moment from 'moment';
@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss'],
  providers: [TransactionTableComponent]
})
export class LatestTransactionsComponent implements OnInit {

  transactions = [
    {'from': '1000002', 'target': '1000001', 'amount': 5, 'total': 471, 'date': '2017-04-15T14:00:00.000Z', '_id': '00bcfxJCvfkHaphX'},
    {'from': '1000001', 'target': '1000002', 'amount': -80, 'total': 89, 'date': '2017-04-12T09:00:00.000Z', '_id': '00kpD0KZN7FrVG7E'},
    {'from': '1000002', 'target': '1000001', 'amount': 31, 'total': 475, 'date': '2017-04-10T23:00:00.000Z', '_id': '01X14rx7JKyCDwY5'}
  ];

  constructor(private navigationSvc: NavigationService) { }

  ngOnInit() {
  }

  showAll() {
    this.navigationSvc.goToAllTransactions();
  }

  updateTransactionData() {
        const now = moment();
        const oneMonthBefore = moment().subtract(1, 'months');
        // TODO: invoke API
        // getTransactions(token, oneMonthBefore, now, 3, 0).then(
        //     (data) => {
        //         this.transactions = data.result;
        //     }
        // );
    }

    formatDate(dateString) {
        return moment(dateString).fromNow();
    }
}
