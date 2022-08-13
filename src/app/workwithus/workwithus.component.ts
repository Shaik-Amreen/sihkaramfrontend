import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttprequestService } from '../commonservices/httprequest.service'

@Component({
  selector: 'app-workwithus',
  templateUrl: './workwithus.component.html',
  styleUrls: ['./workwithus.component.css']
})
export class WorkwithusComponent implements OnInit {

  constructor(private http : HttprequestService) { 
    this.workapply = new FormGroup({
      firstname: new FormControl(''),
      middlename:new FormControl(''),
      lastname:new FormControl(''),
      email:new FormControl(''),
      mobileno:new FormControl(''),
      altmobileno:new FormControl(''),
      jobpost:new FormControl(''),
      prevexperience:new FormControl(''),
      prevworkplace:new FormControl(''),
      address:new FormControl(''),
      approve:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  workapply:any = FormGroup
  apply(){
    this.http.postrequest('/jobapply',this.workapply.value)
  }
}
