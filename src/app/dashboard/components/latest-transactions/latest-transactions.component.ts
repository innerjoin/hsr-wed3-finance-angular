import { Component, OnInit } from '@angular/core';
import { NavigationService} from '../../../core/services/navigation.service';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent implements OnInit {

  transactions = [
    {"from":"1000002","target":"1000001","amount":5,"total":471,"date":{"$$date":1491163200000},"_id":"00bcfxJCvfkHaphX"},
    {"from":"1000001","target":"1000002","amount":-80,"total":89,"date":{"$$date":1489932000000},"_id":"00kpD0KZN7FrVG7E"},
    {"from":"1000002","target":"1000001","amount":31,"total":475,"date":{"$$date":1491854400000},"_id":"01X14rx7JKyCDwY5"}
  ];

  constructor(private navigationSvc: NavigationService) { }

  ngOnInit() {
    /accounts/transactions?count=3
  }
  showAll() {
    this.navigationSvc.goToAllTransactions();
  }
}
