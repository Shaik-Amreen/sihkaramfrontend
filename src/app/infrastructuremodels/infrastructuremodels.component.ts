import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-infrastructuremodels',
  templateUrl: './infrastructuremodels.component.html',
  styleUrls: ['./infrastructuremodels.component.css'],
})
export class InfrastructuremodelsComponent implements OnInit {
  constructor(public sanitizer: DomSanitizer) {}

  sayduck: SafeResourceUrl = '';

  ngOnInit(): void {
    this.sayduck = this.sanitizer.bypassSecurityTrustResourceUrl(
      // '../assests/trails.html'
      'file:///C:/Users/YRT/Desktop/sihkaramfrontend/src/app/assests/trails.html'
    );
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
