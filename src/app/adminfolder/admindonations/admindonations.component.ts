import { Component, OnInit } from '@angular/core';
import { HttprequestService } from 'src/app/commonservices/httprequest.service';
@Component({
  selector: 'app-admindonations',
  templateUrl: './admindonations.component.html',
  styleUrls: ['./admindonations.component.css'],
})
export class AdmindonationsComponent implements OnInit {

  data: any = []
  constructor(private httprequest: HttprequestService) {
    this.httprequest.postrequest('/getDonations', '').subscribe(
      (res: any) => {
        this.data = res.data.reverse()
        console.log(this.data)

      }
    )
  }


  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
