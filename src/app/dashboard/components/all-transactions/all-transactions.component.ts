import { Component, OnInit } from '@angular/core';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as moment from 'moment';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss'],

  providers: [TransactionTableComponent]
})
export class AllTransactionsComponent implements OnInit {

  transactions = [
    {'from':'1000002','target':'1000001','amount':5,'total':471,'date':{'$$date':1491163200000},'_id':'00bcfxJCvfkHaphX'},
    {'from':'1000001','target':'1000002','amount':-80,'total':89,'date':{'$$date':1489932000000},'_id':'00kpD0KZN7FrVG7E'},
    {'from':'1000002','target':'1000001','amount':31,'total':475,'date':{'$$date':1491854400000},'_id':'01X14rx7JKyCDwY5'}
  ];

  monthSelected = moment().month();
  months = Array(12).fill(0).map(function(_, idx) {
    console.log("month: ", _, idx);
    const monthText = ['Jaunary', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
    return {key: idx, value: idx, text: monthText[idx]};
  });
  yearSelected = moment().year();
  years = Array(3).fill(moment().year()).map(function(maxYear, idx) {
    const year = maxYear - idx;
    return {key: year, value: year, text: year};
  });

  constructor() {
  }

  ngOnInit() {
  }

}
