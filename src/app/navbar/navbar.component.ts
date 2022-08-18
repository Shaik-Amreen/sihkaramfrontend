import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  @Output() bgstyle = new EventEmitter<string>();
  role: any;
  routes: any;

  constructor(private router: Router, private modalService: MdbModalService) {
    this.routes = this.publicroutes;
    this.role = sessionStorage.getItem('role');
    console.log(this.role,"this.role")
    if (this.role == 'admin') {
      this.routes = this.adminroutes;
    } else if (this.role == 'contractor') {
      this.routes = this.contractorroutes;
    }
    console.log(this.routes);
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
    { route: 'admindonations', routename: 'Donations' },
    { route: 'feedbacks', routename: 'Feedbacks' },
    { route: 'contracts', routename: 'Contracts' },
    { route: 'jobapplications', routename: 'Job Applications' },
  ];

  contractorroutes = [{ route: 'contractor/homepage', routename: 'Home' }];

  openModal() {
    this.bgstyle.emit();
    this.modalRef = this.modalService.open(ModalComponent);
  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  logout() {
    sessionStorage.removeItem('role');
    this.router.navigate(['/sih']);
  }
}
