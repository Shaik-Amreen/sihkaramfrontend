import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../../commonservices/httprequest.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-adminmaps',
  templateUrl: './adminmaps.component.html',
  styleUrls: ['./adminmaps.component.css']
})
export class AdminmapsComponent implements OnInit {
  urlSafe: SafeResourceUrl;
  mapData: FormGroup;
  edit: any = false;
  err = false;
  submitStatus = false
  frame: any = ''
  constructor(private httprequest: HttprequestService, public sanitizer: DomSanitizer) {
    this.mapData = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      population: new FormControl('', Validators.required),
      occupiedarea: new FormControl('', Validators.required),
      iframe: new FormControl(''),
      located: new FormControl('', Validators.required),
      slumid: new FormControl('', Validators.required),
    })

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapData.value.iframe);
  }

  data: any;
  display: any = 'None'
  displaymodal() {
    this.display = 'block';
  }
  ngOnInit(): void {
  }

  change() {
    console.log("heloooooooooooooooo")
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.frame);

  }
  submit() {
    if (this.mapData.status == 'VALID') {
      let url = '/postMaps'
      if (this.edit) {
        url = '/editMaps'
      }
      this.httprequest.postrequest(url, '').subscribe(
        (res: any) => {
          this.submitStatus = true
        }
      )
    }
    else {
      this.err = true;
    }
  }






}
