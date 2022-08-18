import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localanalysis',
  templateUrl: './localanalysis.component.html',
  styleUrls: ['./localanalysis.component.css'],
})
export class LocalanalysisComponent implements OnInit {
  constructor() {
    sessionStorage.removeItem('role');
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
