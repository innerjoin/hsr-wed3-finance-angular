import {Injectable, EventEmitter} from '@angular/core';

import {AccountModel} from '../models/account.model';
import {AccountResource} from '../resources/account.resource';

@Injectable()
export class AccountService {
    public accountChange: EventEmitter<AccountModel> = new EventEmitter();
    public targetAccountChange: EventEmitter<AccountModel> = new EventEmitter();
    public targetAccountMessageChange: EventEmitter<string> = new EventEmitter();

    private account: AccountModel;
    private targetAccount: AccountModel;
    private tResource: AccountResource;

    constructor(tResource: AccountResource) {
        this.tResource = tResource;
    }

    public get getAccountInformation(): AccountModel {
        return this.account;
    }

    public checkAccountNr(accountNr) {
        if (accountNr.length > 2) {
            this.targetAccountMessageChange.emit('Unknown account number specified');
            this.tResource.checkAccountNr(accountNr).subscribe((data) => {
                this.targetAccount = data || null;
                this.targetAccountChange.emit(this.targetAccount);
                this.targetAccountMessageChange.emit(this.targetAccount.owner.firstname + ' ' + this.targetAccount.owner.lastname);
            });
        } else {
            this.targetAccountMessageChange.emit('Please specify the target account number.');
        }

    }

    public updateAccount() {
        this.tResource.getAccount().subscribe((data: AccountModel) => {
            this.account = data || null;
            this.accountChange.emit(this.account);
        });
    }
}
