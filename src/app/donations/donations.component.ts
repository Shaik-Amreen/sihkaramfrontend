import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../commonservices/httprequest.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
})
export class DonationsComponent implements OnInit {
  displaypopup = false;
  popup: any = 'Payment Successfull';

  successMsg = '';
  showerr: any = false;
  pay: any = false;
  workapply: any = FormGroup;
  constructor(
    private httprequest: HttprequestService
  ) {
    sessionStorage.removeItem('role');
    this.workapply = new FormGroup({
      fullname: new FormControl('', Validators.required),
      companyname: new FormControl(''),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      streetno: new FormControl('', Validators.required),
      appartment: new FormControl(''),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      pincode: new FormControl("", Validators.required),
      amount: new FormControl(1500, Validators.required),
      donationmsg: new FormControl(''),
    });
  }

  ngOnInit() {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  submit() {
    if (this.workapply.status == 'VALID') {
        this.workapply.controls['amount'].value
          ? (history.state.amount = this.workapply.controls['amount'].value)
          : (history.state.amount = 1500);
        this.pay = true;
        this.paymentRequest = {
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
      } else {
        this.showerr = true;
      }
  }

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
      totalPrice: "1500",
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
    this.httprequest
      .postrequest('/postDonations', this.workapply.value)
      .subscribe(
        (res) => {
          this.displaypopup = true;
          this.popup = 'Payment Successfull';
          setTimeout(() => {
            this.displaypopup = false;
          }, 4000);
        },
        (err) => console.log(err)
      );
    return {
      transactionState: 'SUCCESS',
    };
  };

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  };
}
