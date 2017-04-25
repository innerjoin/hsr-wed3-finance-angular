import {Injectable} from '@angular/core';

@Injectable()
export class TransactionQueryOptions {
  public count: number;
  public skip: number;
  public fromDate: string;
  public toDate: string;

  public constructor(count: number, skip: number, fromDate: string, toDate: string) {
    this.count = count;
    this.skip = skip;
    this.fromDate = fromDate;
    this.toDate = toDate;
  }
}
