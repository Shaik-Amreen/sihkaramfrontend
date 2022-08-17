import { Component, OnInit } from '@angular/core';
import { HttprequestService } from 'src/app/commonservices/httprequest.service';
@Component({
  selector: 'app-jobapplications',
  templateUrl: './jobapplications.component.html',
  styleUrls: ['./jobapplications.component.css'],
})
export class JobapplicationsComponent implements OnInit {
  data: any
  constructor(private httprequest: HttprequestService) {
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

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
