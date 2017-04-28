import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {AccountService} from '../../services/account.service';
import {AccountModel} from '../../models/account.model';
import {TransactionModel} from '../../models/transaction.model';
import {TransactionResource} from '../../resources/transaction.resource';
import {AccountResource} from '../../resources/account.resource';


@Component({
    selector: 'app-new-payment',
    templateUrl: './new-payment.component.html',
    styleUrls: ['./new-payment.component.scss']
})


export class NewPaymentComponent implements OnInit {
    targetAccountNr: any;
    transferAmount: any;


    targetAccount: AccountModel;
    private account: AccountModel = AccountModel.fromDto({accountNr: '0', amount: 0});
    private transactionResource: TransactionResource;

    private messages = {
        payment: null,
        receiver: null,
        amount: null
    };

    constructor(private transSvc: TransactionService, private accountSvc: AccountService,
                private tResource: TransactionResource, private aResource: AccountResource) {
    }


    ngOnInit() {
        this.accountSvc.accountChange.subscribe((t) => {
            this.account = t.toDto();
        });
        this.accountSvc.targetAccountChange.subscribe((t) => {
            this.targetAccount = t.toDto();
        });
        this.accountSvc.targetAccountMessageChange.subscribe((t) => {
            this.messages.receiver = t;
        });
        this.transSvc.transactionMessageChange.subscribe((t) => {
            this.messages.payment = t;
        });
        this.transSvc.transactionSuccessful.subscribe((t) => {
          this.initializeMessages();
          this.initializeForm();
        })
        this.updateAccountData();
        this.initializeMessages();
    }

    initializeForm() {
        this.targetAccountNr = '';
        this.transferAmount = '';
    }

    initializeMessages() {
        this.messages.amount = 'Please specify the amount';
        this.messages.receiver = 'Please specify the target account number.';
    }

    onHandlePayment() {
        this.transSvc.createTransfer(TransactionModel.fromDto({amount: this.transferAmount, target: this.targetAccountNr}));
    }

    onHandleTarget(target) {
        this.accountSvc.checkAccountNr(target);
    }

    updateAccountData() {
        this.accountSvc.updateAccount();
    }

}
