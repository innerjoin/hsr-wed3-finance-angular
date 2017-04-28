import {Injectable} from '@angular/core';

@Injectable()
export class AccountModel {
    accountNr: string;
    name: string;
    amount: number;
    owner: any;
    error: string;

    public static fromDto(data: any): AccountModel {
        if (data.error !== undefined) {
            return new AccountModel(null, null, null, null, data.error);
        } else {
            return new AccountModel(data.accountNr, data.name, data.amount, data.owner, null);
        }
    }

    public constructor(accountNr: string, name: string, amount: number, owner: any, error: string) {
        this.accountNr = accountNr;
        this.name = name;
        this.amount = amount;
        this.owner = owner;
        this.error = error;
    }

    toDto(): any {
        return {
            accountNr: this.accountNr,
            name: this.name,
            amount: this.amount,
            owner: this.owner,
            error: this.error
        };
    }
}
