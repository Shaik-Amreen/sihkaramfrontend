import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  role: any
  admin: any=0
  constructor() {
    sessionStorage.removeItem('role');
    this.role = sessionStorage.getItem('role');
    if (this.role == 'admin') {
      this.admin = 1
    } else if (this.role == 'contractor') {
      this.admin = 2
    }
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
