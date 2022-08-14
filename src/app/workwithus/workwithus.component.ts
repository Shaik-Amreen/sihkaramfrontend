import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../commonservices/httprequest.service'

@Component({
  selector: 'app-workwithus',
  templateUrl: './workwithus.component.html',
  styleUrls: ['./workwithus.component.css']
})
export class WorkwithusComponent implements OnInit {


  successMsg = '';showerr:any=false
  constructor(private httprequest: HttprequestService, private http: HttpClient,) {
    this.workapply = new FormGroup({
      firstname: new FormControl('', Validators.required),
      middlename: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileno: new FormControl('', Validators.required),
      altmobileno: new FormControl('', Validators.required),
      jobpost: new FormControl('', Validators.required),
      prevexperience: new FormControl('', Validators.required),
      prevworkplace: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      approve: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  workapply: any = FormGroup
  apply() {
    if (this.workapply.status == 'VALID') {
      this.httprequest.postrequest('/postuser', this.workapply.value)
      this.successMsg = 'Sucessfully submitted'
    }
    else{
      this.showerr=true
    }
  }
}
