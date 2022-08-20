import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../commonservices/httprequest.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  data: any; imageSource: any; i: any = 0
  constructor(private httprequest: HttprequestService) {

    this.httprequest.postrequest('/getMaps', '').subscribe(
      (res: any) => {
        this.data = res.data.reverse()
        console.log(this.data, "hleooojhvdvu hvadvchoooooooooooooooo")
      }
    )

    setInterval(() => {
      this.imageSource = this.data[this.i]['iframe'];
      if (this.i == this.data.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }
    }, 3000);
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
