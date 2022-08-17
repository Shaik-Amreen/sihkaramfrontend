import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../commonservices/httprequest.service';
// import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  successMsg = '';
  showerr: any = false;
  scrollToTopBtn: any = document.getElementById("scrollToTopBtn")
  rootElement: any = document.documentElement

  constructor(private httprequest: HttprequestService, private http: HttpClient) {
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

  scrollToTop() {
    // Scroll to top logic
    this.rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  workapply: any = FormGroup;
  submit() {
    if (this.workapply.status == 'VALID') {
      this.httprequest
        .postrequest('/postfeedback', this.workapply.value)
        .subscribe((res) => {
          this.successMsg = 'Sucessfully submitted';
          this.workapply.reset();
          setTimeout(() => {
            this.successMsg = '';
          }, 2000);
        });
    } else {
      this.showerr = true;
    }
  }
}
