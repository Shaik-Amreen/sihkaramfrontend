import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  addPeople: any = false
  people: FormGroup
  // skills: FormArray=[]
  userStatus: any = '';
  public: any = []

  constructor(private httprequest: HttprequestService, private fb: FormBuilder) {
    this.httprequest.postrequest('/getPublic', '').subscribe(
      (res: any) => {
        console.log(res.data, "resssssssssssssssssssssssssssssss")
        this.public = res.data
      }
    )

    this.mapData = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      population: new FormControl('', Validators.required),
      occupiedarea: new FormControl('', Validators.required),
      iframe: new FormControl(''),
      located: new FormControl('', Validators.required),
      slumid: new FormControl('', Validators.required),
      people: new FormArray([])
    })




    this.people = new FormGroup({
      // slumid: new FormControl('', Validators.required),
      // image: new FormControl('', Validators.required),
      aadharid: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      prevaddress: new FormControl('', Validators.required),
      Reasonofmigration: new FormControl('', Validators.required),
      skills: new FormArray([this.initTimes()]),
    })

    this.getData()

  }

  initTimes() {
    return this.fb.group({
      skill: this.fb.control('', Validators.required),
      experience: this.fb.control('', Validators.required),
    });
  }

  addGroup() {
    // add address to the list
    const control = <FormArray>this.people.controls['skills'];
    control.push(this.initTimes());
  }

  removeGroup(i: number) {
    // remove address from the list
    const control = <FormArray>this.people.controls['skills'];
    control.removeAt(i);
  }

  tempimg = "assets/user.png";

  handleFileSelect(evt: any) {
    var reader: any = ""
    reader = new FileReader;
    // console.log("reader",reader)
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.tempimg = event.target.result;
      console.log("image", this.tempimg)
    }
    evt.target.value = "";
  }

  searchtext: any = ''
  search() {
    if (this.searchtext == '') {
      return this.public;
    } else {
      let temp = this.public.filter((j: any) => {
        return (j.occupation.includes(this.searchtext) || j.skills.includes(this.searchtext) || j.presentaddress.includes(this.search))

      });
      // let x=temp
      // temp = temp.push(...x)
      // console.log(temp,"temp")
      return temp;
    }
  }


  getData() {
    this.httprequest.postrequest('/getMaps', '').subscribe(
      (res: any) => {
        this.data = res.data.reverse()
        console.log(this.data)
      }
    )
  }

  // get controls() {

  //   return (<FormArray>this.skills.get('batch')).controls;
  // }

  // addEligible() {
  //   (<FormArray>this.skills.get('batch')).push(new FormGroup({
  //     'batchvalue': new FormControl("", Validators.required),
  //   }))
  // }


  // deleteEligible(id: number) {
  //   (<FormArray>this.skills.get('batch')).removeAt(id)
  // }

  add(i: any) {
    // console.log(i)

    this.userStatus = ''
    this.addPeople = true
    this.people.value.slumid = i.slumid
    this.display = 'block';
    this.mapData.patchValue(i)
    this.mapData.controls.slumid.disable()
  }
  edit(i: any) {
    this.err = false
    this.addPeople = false
    this.editMode = true
    this.display = 'block';
    this.mapData.patchValue(i)
    console.log(this.mapData.value, "edit activate")
    // this.prevslumid = this.mapData.controls.slumid
    this.mapData.controls.slumid.disable()
  }

  close() {
    this.mapData.reset();
  }
  closePeople() {
    this.display = 'None'
    this.mapData.controls.slumid.enable()
  }

  display: any = 'None'; prevslumid: any
  displaymodal() {
    this.mapData.reset();
    this.editMode = false
    this.addPeople = false
    this.display = 'block';
    this.mapData.controls.slumid.enable();
  }
  ngOnInit(): void {


    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  submit() {
    this.err = false
    if (this.mapData.status == 'VALID') {
      this.mapData.controls.slumid.enable();
      let url = '/postMaps'
      // let data = {...this.mapData.value}
      if (this.editMode) {
        url = '/editMaps'
        // data.prevslumid=this.prevslumid
      }
      // console.log(url,data)
      this.httprequest
        .postrequest(url, { ...this.people.value, slumname: this.mapData.controls.name, currentlocation: this.mapData.controls.located })
        .subscribe((res: any) => {
          this.mapData.reset();
          this.getData();
          this.displaypopup = true;
          this.popup = 'Successfully submitted';
          setTimeout(() => {
            this.displaypopup = false;
          }, 4000);
          this.submitStatus = true;
          this.display = 'None';
        });
    }
    else {
      this.err = true;
    }
  }

  displaypopup: any = ""
  popup: any = ""

  enroll() {
    this.err = false
    this.people.controls['image'].setValue(this.tempimg)
    if (this.people.status === 'VALID') {
      this.mapData.controls.slumid.enable()
      this.httprequest
        .postrequest('/findOrPostPeople', this.mapData.value)
        .subscribe((res: any) => {
          if (res.message == 'exist') {
            this.userStatus = 'User already exist'
            this.displaypopup = true;
            this.popup = 'User already exist';
            setTimeout(() => {
              this.displaypopup = false;
            }, 4000);
          }
          else {
            this.display = 'None';
            this.displaypopup = true;
            this.popup = 'Person Added Successfull';
            this.mapData.reset()
            setTimeout(() => {
              this.displaypopup = false;
            }, 4000);
          }
        });
    }
    else {
      this.err = true
      this.displaypopup = true;
      this.popup = 'Invalid Input !';
      setTimeout(() => {
        this.displaypopup = false;
      }, 4000);
    }
  }






}
