import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttprequestService } from '../commonservices/httprequest.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  logindetails: any = FormGroup;
  showerr: any = false;
  displaypopup: any = false;
  popup:any
  constructor(
    private router:Router,
    private httprequest: HttprequestService,
    modalRef: MdbModalRef<ModalComponent>
  ) {
    this.logindetails = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    if (this.logindetails.status == 'VALID') {
      this.httprequest
        .postrequest('/authenticateuser', this.logindetails.value)
        .subscribe((res) => {
          console.log(res);
          sessionStorage.setItem('role', res.role);
          if (res.role == 'admin') {
            this.router.navigate(['/sih/admin']);
          }
          // this.displaypopup = true;
          // this.popup = 'Successfully Submitted';
          // setTimeout(() => {
          //   this.displaypopup = false;
          // }, 4000);
        });
    } else {
      this.showerr = true;
    }
  }
}