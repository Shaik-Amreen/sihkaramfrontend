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
  jobdetails: any = FormGroup;
  jobs: any;
  display = 'None';
  err = false;

  constructor(private httprequest: HttprequestService) {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
    this.jobdetails = new FormGroup({
      amount: new FormControl('', Validators.required),
      jobtitle: new FormControl('', Validators.required),
      jobskills: new FormControl('', Validators.required),
      jobdescription: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      jobid: new FormControl('', Validators.required),
    });

    this.httprequest.postrequest('/getJobs', {}).subscribe((res: any) => {
      this.jobs = res.data;
    });

    this.httprequest
      .postrequest('/getApplications', '')
      .subscribe((res: any) => {
        this.data = res.data;
      });
  }

  searchtext: any = ''
  search() {
    if (this.searchtext == '') {
      return this.data;
    } else {
      console.log(this.data, "this.data")
      let temp = this.data.filter((j: any) => {
        return (j.jobtitle.toLowerCase().includes(this.searchtext.toLowerCase()) ||
          j.jobid.toLowerCase().includes(this.searchtext.toLowerCase())
          || j.mobileno.toLowerCase().includes(this.searchtext.toString().toLowerCase())
          || j.prevexperience.toLowerCase().includes(this.searchtext.toLowerCase()) || j.firstname.toLowerCase().includes(this.searchtext.toLowerCase()) || j.lastname.toLowerCase().includes(this.searchtext.toLowerCase()) )
      });
      // let x=temp
      // temp = temp.push(...x)
      // console.log(temp,"temp")
      return temp;
    }
  }


  displaymodal() {
    this.display = 'block';
  }

  approve(i: any, d: any) {
    this.data[i].approve = d;
    this.httprequest
      .postrequest('/approveApplications', this.data[i])
      .subscribe((res: any) => {});
  }


  displaypopup: any = ""
  popup: any = ""
  createjob() {
    if (this.jobdetails.status == 'VALID') {
      this.httprequest
        .postrequest('/postJob', this.jobdetails.value)
        .subscribe((res: any) => {
          console.log(res, 'res');
          this.displaypopup = true;
          this.popup = 'Successfully submitted';
          setTimeout(() => {
            this.displaypopup = false;
          }, 4000);
          this.display = 'None'
        });
    } else {
      this.err = true;
    }
  }
  
}
