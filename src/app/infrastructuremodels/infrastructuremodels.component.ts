import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructuremodels',
  templateUrl: './infrastructuremodels.component.html',
  styleUrls: ['./infrastructuremodels.component.css'],
})
export class InfrastructuremodelsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
