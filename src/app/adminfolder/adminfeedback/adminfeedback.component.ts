import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../../commonservices/httprequest.service';

@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css'],
})
export class AdminfeedbackComponent implements OnInit {
  data:any
  constructor( private httprequest:HttprequestService) {
    this.httprequest.postrequest('/getFeedback','').subscribe(
      (res:any)=>{
        this.data=res.data
      }
    )
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
