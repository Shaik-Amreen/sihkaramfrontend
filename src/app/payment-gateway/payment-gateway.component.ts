import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttprequestService } from '../commonservices/httprequest.service';
@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
})
export class PaymentGatewayComponent implements OnInit {
  @Input() appdata: any;
  displaypopup = false;
  popup :any = 'Payment Successfull'
  constructor(private router: Router, private http: HttprequestService) {}

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '92345678901234567890',
      merchantName: 'SIH',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: history.state.amount.toString(),
      currencyCode: 'INR',
      countryCode: 'IN',
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION'],
  };

  onLoadPaymentData = (event: Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
    
  };

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData: any
  ) => {
    this.http
      .postrequest(
        '/donate',
        this.appdata.value
      )
      .subscribe(
        (res) => {this.displaypopup = true;
        this.popup = 'Payment Successfull';
        setTimeout(() => {
          this.displaypopup = false;
        }, 4000);},
        (err) => console.log(err)
      );
    return {
      transactionState: 'SUCCESS',
    };
  };

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  };

  ngOnInit() {}
}

