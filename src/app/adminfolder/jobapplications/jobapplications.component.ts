import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from 'src/app/commonservices/httprequest.service';
@Component({
  selector: 'app-jobapplications',
  templateUrl: './jobapplications.component.html',
  styleUrls: ['./jobapplications.component.css'],
})
export class JobapplicationsComponent implements OnInit {
  data: any;
  jobdetails: FormGroup
  jobs: any

  constructor(private httprequest: HttprequestService) {
    this.jobdetails = new FormGroup({
      amount: new FormControl('', Validators.required),
      jobtitle: new FormControl('', Validators.required),
      jobdescription: new FormControl('', Validators.required),
      jobid: new FormControl('', Validators.required),
    })

    this.httprequest.postrequest('/getJobs', '').subscribe(
      (res: any) => {
        this.jobs = res.data
      }
    )


    this.httprequest.postrequest('/getApplications', '').subscribe(
      (res: any) => {
        this.data = res.data
      }
    )
  }

  approve(i: any, d: any) {
    this.data[i].approve = d
    this.httprequest.postrequest('/approveApplications', this.data[i]).subscribe(
      (res: any) => {

      }
    )
  }

  createjob() {
    this.httprequest.postrequest('/postJob', this.jobdetails).subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
