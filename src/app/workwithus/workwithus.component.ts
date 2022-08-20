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
  jobs: any;
  currentApplying: any = { jobdescription: '', jobtitle: '' };
  searchtext: any = '';
  constructor(
    private httprequest: HttprequestService,
    private http: HttpClient
  ) {
    this.httprequest.postrequest('/getJobs', '').subscribe((res: any) => {
      this.jobs = res.data;
    });
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
  display: any = 'none';
  jobpost: any;

  selected(c: any) {
    this.display = 'block';
    this.currentApplying = c;
    this.jobpost = this.currentApplying.jobtitle;
    this.workapply.controls['jobpost'].disable();
  }

  search() {
    if (this.searchtext == '') {
      return this.jobs;
    } else {
      let temp = this.jobs.filter((j: any) => {
        return (j.jobtitle.includes(this.searchtext) ||
          j.jobid.includes(this.searchtext) ||
          j.location.includes(this.searchtext) ||
          j.jobdescription.includes(this.searchtext))
      });
      // let x=temp
      // temp = temp.push(...x)
      // console.log(temp,"temp")
      return temp;
    }
  }

  displaypopup: any = false;
  popup: any = 'Successfully Submitted';
  application: any = ''

  apply() {
    this.application = false
    if (this.workapply.status == 'VALID') {
      console.log(this.workapply.value);
      this.httprequest
        .postrequest('/postapplications', {
          ...this.workapply.value,
          jobid: this.currentApplying.jobid,
          jobtitle: this.currentApplying.jobtitle,
        })
        .subscribe((res) => {
          if (res.message != 'error') {
            // this.successMsg = 'Sucessfully submitted';
            this.displaypopup = true;
            this.popup = 'Payment Successfull';
            this.display = 'None';
            this.workapply.reset();
            setTimeout(() => {
              this.displaypopup = false;
            }, 4000);
          } else {
            this.application = true;
          }
        });
    } else {
      this.showerr = true;
    }
  }
}
