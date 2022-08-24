import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ModalComponent } from '../modal/modal.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttprequestService } from '../commonservices/httprequest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // modalRef: MdbModalRef<ModalComponent> | null = null;

  @Output() bgstyle = new EventEmitter<string>();
  role: any;
  routes: any;
  logindetails: any = FormGroup;
  showerr: any = false;
  display: any;

  constructor(
    private router: Router,
    private httprequest: HttprequestService
  ) // private modalService: MdbModalService
  {
    this.routes = this.publicroutes;
    this.role = sessionStorage.getItem('role');
    console.log(this.role, 'this.role');
    if (this.role == 'admin') {
      this.routes = this.adminroutes;
    } else if (this.role == 'contractor') {
      // this.routes = this.contractorroutes;
    }
    console.log(this.routes);
    this.logindetails = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  publicroutes = [
    { route: 'homepage', routename: 'Home' },
    { route: 'services', routename: 'Services' },
    { route: 'workwithus', routename: 'Employment' },
    { route: 'infrastructure', routename: 'Infrastructure Designs' },
    { route: 'maps', routename: 'Maps' },
    // { route: 'localanalysis', routename: 'Local Analysis' },
    { route: 'donations', routename: 'Donate' },
    { route: 'feedback', routename: 'Feedback & Report' },
    // { route: 'contactus', routename: 'Contact Us' },
  ];

  adminroutes = [
    { route: 'adminhomepage', routename: 'Home' },
    { route: 'adminmaps', routename: 'Maps' },
    { route: 'jobapplications', routename: 'Job Applications' },
    { route: 'admindonations', routename: 'Donations' },
    { route: 'feedbacks', routename: 'Feedbacks & Reports' },
    // { route: 'contracts', routename: 'Contracts' },
  ];

  // contractorroutes = [{ route: 'contractor/homepage', routename: 'Home' }];

  // openModal() {
  //   // this.bgstyle.emit();
  //   // this.modalRef = this.modalService.open(ModalComponent);
  // }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  logout() {
    sessionStorage.removeItem('role');
    this.router.navigate(['/sih']);
  }

  login() {
    if (this.logindetails.status == 'VALID') {
      this.httprequest
        .postrequest('/authenticateuser', this.logindetails.value)
        .subscribe((res) => {
          console.log(res);
          sessionStorage.setItem('role', res.role);
          if (res.role == 'admin') {
            // console.log(hello )
            this.router.navigate(['/sih/admin']);
            // this.modalRef = this.modalService.open(ModalComponent);
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
  cancel() {
    this.showerr = null;
    this.logindetails.reset();
    this.display = 'None';
  }
}
