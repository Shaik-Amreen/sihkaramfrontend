import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../../commonservices/httprequest.service';

@Component({
  selector: 'app-adminmaps',
  templateUrl: './adminmaps.component.html',
  styleUrls: ['./adminmaps.component.css']
})
export class AdminmapsComponent implements OnInit {

  mapData: FormGroup;
  editMode: any = false;
  err = false;
  submitStatus = false
  data: any = []





  constructor(private httprequest: HttprequestService,) {
    this.mapData = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      population: new FormControl('', Validators.required),
      occupiedarea: new FormControl('', Validators.required),
      iframe: new FormControl(''),
      located: new FormControl('', Validators.required),
      slumid: new FormControl('', Validators.required),
    })


    this.getData()

  }

  getData() {
    this.httprequest.postrequest('/getMaps', '').subscribe(
      (res: any) => {
        this.data = res.data.reverse()
        console.log(this.data)
      }
    )
  }

  edit(i: any) {
    this.editMode = true
    this.display = 'block';
    this.mapData.patchValue(i)
  }


  display: any = 'None'
  displaymodal() {
    this.editMode = false
    this.display = 'block';
    this.mapData.reset()
  }
  ngOnInit(): void {
  }

  submit() {
    console.log(this.mapData)
    if (this.mapData.status == 'VALID') {
      let url = '/postMaps'
      if (this.editMode) {
        url = '/editMaps'
      }
      this.httprequest.postrequest(url, this.mapData.value).subscribe(
        (res: any) => {
          this.getData()
          this.submitStatus = true
          this.display = 'None'
        }
      )
    }
    else {
      this.err = true;
    }
  }






}
