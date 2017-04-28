import {Injectable} from '@angular/core';

@Injectable()
export class TransactionModel {
  from: string;
  target: string;
  amount: number;
  total: number;
  date: Date;

  public static fromDto(data: any): TransactionModel {
    return new TransactionModel(data.from, data.target, data.amount, data.total, data.date);
  }

  public constructor(from: string, target: string, amount: number, total: number, date: Date) {
    this.from = from;
    this.target = target;
    this.amount = amount;
    this.total = total;
    this.date = date;
  }

  toDto(): any {
    return {
      from: this.from,
      target: this.target,
      amount: this.amount,
      total: this.total,
      date: this.date
    };
  }
}
