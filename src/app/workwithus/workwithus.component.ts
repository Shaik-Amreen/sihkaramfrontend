import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../commonservices/httprequest.service';

@Component({
  selector: 'app-workwithus',
  templateUrl: './workwithus.component.html',
  styleUrls: ['./workwithus.component.css'],
})
export class WorkwithusComponent implements OnInit {
  successMsg = '';
  showerr: any = false;
  constructor(
    private httprequest: HttprequestService,
    private http: HttpClient
  ) {
    this.workapply = new FormGroup({
      firstname: new FormControl('', Validators.required),
      middlename: new FormControl(''),
      lastname: new FormControl('', Validators.required),
      email: new FormControl(''),
      mobileno: new FormControl('', Validators.required),
      altmobileno: new FormControl(''),
      jobpost: new FormControl('', Validators.required),
      prevexperience: new FormControl('', Validators.required),
      prevworkplace: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      approve: new FormControl(''),
    });
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  workapply: any = FormGroup;
  apply() {
    if (this.workapply.status == 'VALID') {
      this.httprequest
        .postrequest('/postapplications', this.workapply.value)
        .subscribe((res) => {
          this.successMsg = 'Sucessfully submitted';
          setTimeout(() => {
            this.workapply.reset();
            this.successMsg = '';
          }, 2000);
        });
    } else {
      this.showerr = true;
    }
  }
}
