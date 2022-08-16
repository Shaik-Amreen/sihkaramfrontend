import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor(private Router: Router) {}

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  contact() {
    this.Router.navigate(['/sih/feedback']);
  }
}
