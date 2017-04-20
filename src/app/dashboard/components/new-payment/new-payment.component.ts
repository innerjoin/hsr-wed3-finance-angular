import {Component, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {FormsModule}   from '@angular/forms';

@Component({
    selector: 'app-new-payment',
    templateUrl: './new-payment.component.html',
    styleUrls: ['./new-payment.component.css']
})

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroFormComponent
    ],
    bootstrap: [AppComponent]
})


export class NewPaymentComponent implements OnInit {

    paymentStatus = '';

    constructor(public id: number,
                public name: string,
                public power: string,
                public alterEgo?: string) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
    }

    onHandlePayment() {
        this.paymentStatus = 'You are my hero!';
    }

}
