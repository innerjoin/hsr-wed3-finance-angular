import {Injectable, EventEmitter} from '@angular/core';

import {TransactionModel} from '../models/transaction.model';
import {TransactionQueryOptions} from '../models/transaction-query-options.model';
import {TransactionResource} from '../resources/transaction.resource';

@Injectable()
export class TransactionService {
  public lastTransactionChange: EventEmitter<TransactionModel[]> = new EventEmitter<TransactionModel[]>();
  public filteredTransactionChange: EventEmitter<TransactionModel[]> = new EventEmitter<TransactionModel[]>();
  public transferChangeEvent: EventEmitter<TransactionModel> = new EventEmitter<TransactionModel>();
  public transactionMessageChange: EventEmitter<string> = new EventEmitter();
  public reloadLatestTransactions: EventEmitter<boolean> = new EventEmitter();
  public transactionSuccessful: EventEmitter<boolean> = new EventEmitter();

  private lastTransactions: TransactionModel[] = [];
  private filteredTransactions: TransactionModel[] = [];
  private tResouce: TransactionResource;

  constructor(tResource: TransactionResource) {
    this.tResouce = tResource;
  }

  public get getLatestTransactions(): TransactionModel[] {
    return this.lastTransactions;
  }

  public updateLatestTransactions(queryOpts: TransactionQueryOptions) {
    this.tResouce.getTransactions(queryOpts).subscribe((data: TransactionModel[]) => {
      this.lastTransactions = data || null;
      this.lastTransactionChange.emit(this.lastTransactions);
    });
  }

  public createTransfer(trans: TransactionModel) {
    this.tResouce.executeTransaction(trans).subscribe((res: TransactionModel) => {
      if (res !== null) {
        this.transferChangeEvent.emit(res);
        this.transactionMessageChange.emit('Transaction successful');
        this.reloadLatestTransactions.emit();
        this.transactionSuccessful.emit();
      } else {
        this.transactionMessageChange.emit('Transaction not successful');
      }
    });
  }
}
