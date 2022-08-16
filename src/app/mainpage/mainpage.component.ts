import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  background:any=""

  bgstyle(){
    this.background = 'rgba(0, 0, 0, .5)'
    console.log(this.background)
  }
}
