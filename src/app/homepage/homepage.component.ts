import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images: any = ['assets/homeone.jpg', 'assets/hometwo.jpg', 'assets/homefou.jpg']
  imageSource: any = this.images[0]
  i: any = 0
  constructor() {
    setInterval(() => {
      this.imageSource = this.images[this.i];
      if (this.i == this.images.length - 1) {
        this.i = 0
      }
      else {
        this.i++;
      }

    }, 3000)

  }

  ngOnInit(): void {
  }

  onItemChange($event: any): void {
  }
}
