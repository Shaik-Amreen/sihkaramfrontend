import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
})
export class PaymentGatewayComponent implements OnInit {
  @Input() appdata: any;

  constructor(private router: Router, private http: HttpClient) {
    console.log('payment gatewayyyyyyyyyyyyyyyyy');
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
      merchantId: '12345678901234567890',
      merchantName: 'MITS',
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
    localStorage.setItem('enddate', this.appdata.value.enddate);
    if (history.state.type == 'supply') {
      let a = {
        date: this.appdata.value.date,
        rollno: this.appdata.value.rollno,
        departmentname: this.appdata.value.departmentname,
        coursename: this.appdata.value.coursename,
        year: this.appdata.value.year,
        sem: this.appdata.value.sem,
        paymentmode: this.appdata.value.paymentmode,
        enddate: this.appdata.value.enddate,
        examname: this.appdata.value.examname,
        name: this.appdata.value.name,
        subjectcode: '',
        subjectname: '',
      };

      let finaldata = [];

      for (let c of this.appdata.value.subjects) {
        a.subjectcode = c.subjectcode;
        a.subjectname = c.subjectname;
        finaldata.push(a);
      }

      this.http
        .post<any>(
          'http://localhost:4000/payment/savesupplystudentdata',
          this.appdata.value
        )
        .subscribe(
          (res) => this.router.navigate(['/student/hallticket']),
          (err) => console.log(err)
        );
    } else {
      this.http
        .post<any>(
          'http://localhost:4000/payment/savestudentdata',
          this.appdata.value
        )
        .subscribe(
          (res) => this.router.navigate(['/student/hallticket']),
          (err) => console.log(err)
        );
    }

    return {
      transactionState: 'SUCCESS',
    };
  };

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  };

  ngOnInit() {}
}

// strikeCheckout:any = null;

// constructor() { }

// ngOnInit() {
//   this.stripePaymentGateway();
// }

// checkout(amount : number) {
//   const strikeCheckout = (<any>window).StripeCheckout.configure({
//     key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
//     locale: 'auto',
//     token: function (stripeToken: any) {
//       console.log(stripeToken)
//       alert('Stripe token generated!');
//     }
//   });

//   strikeCheckout.open({
//     name: 'RemoteStack',
//     description: 'Payment widgets',
//     amount: amount * 100
//   });
// }

// stripePaymentGateway() {
//   if(!window.document.getElementById('stripe-script')) {
//     const scr = window.document.createElement("script");
//     scr.id = "stripe-script";
//     scr.type = "text/javascript";
//     scr.src = "https://checkout.stripe.com/checkout.js";

//     scr.onload = () => {
//       this.strikeCheckout = (<any>window).StripeCheckout.configure({
//         key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
//         locale: 'auto',
//         token: function (token: any) {
//           console.log(token)
//           alert('Payment via stripe successfull!');
//         }
//       });
//     }

//     window.document.body.appendChild(scr);
//   }
// }
