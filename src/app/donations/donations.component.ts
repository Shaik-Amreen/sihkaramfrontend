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
  successMsg = '';
  showerr: any = false;
  pay: any = false;
  workapply: any = FormGroup;
  constructor(
    private httprequest: HttprequestService,
    private http: HttpClient
  ) {
    sessionStorage.removeItem('role');
    this.workapply = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl(''),
      contact: new FormControl(''),
      suggestions: new FormControl('', Validators.required),
      feedbackmsg: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  submit() {
    history.state.amount = 1500
    this.pay = true;
  //   if (this.workapply.status == 'VALID') {
  //     this.pay = true;
  //     this.httprequest
  //       .postrequest('/postfeedback', this.workapply.value)
  //       .subscribe((res) => {
  //         this.successMsg = 'Sucessfully submitted';
  //         this.workapply.reset();
  //         setTimeout(() => {
  //           this.successMsg = '';
  //         }, 2000);
  //       });
  //   } else {
  //     this.showerr = true;
  //   }
  }
}
