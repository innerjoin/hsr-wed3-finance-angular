import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  transactions = [
    {"from":"1000002","target":"1000001","amount":5,"total":471,"date":{"$$date":1491163200000},"_id":"00bcfxJCvfkHaphX"},
    {"from":"1000001","target":"1000002","amount":-80,"total":89,"date":{"$$date":1489932000000},"_id":"00kpD0KZN7FrVG7E"},
    {"from":"1000002","target":"1000001","amount":31,"total":475,"date":{"$$date":1491854400000},"_id":"01X14rx7JKyCDwY5"}
  ];

  years = [
    {value: 2017, viewValue: '2017'},
    {value: 2016, viewValue: '2016'},
    {value: 2015, viewValue: '2015'}
  ];

  months = [
    {value: 1, viewValue: 'January'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
