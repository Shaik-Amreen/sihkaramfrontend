import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

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

  constructor(private modalService: MdbModalService) {
    this.routes = this.publicroutes;
    this.role = sessionStorage.getItem('role');
    if (this.role == 'admin') {
      this.routes = this.adminroutes;
    } else if (this.role == 'contractor') {
      this.routes = this.contractorroutes;
    }
    console.log(this.routes)
  }

  publicroutes = [
    { route: 'homepage', routename: 'Home' },
    { route: 'services', routename: 'Services' },
    { route: 'maps', routename: 'Maps' },
    { route: 'donations', routename: 'Donate' },
    { route: 'localanalysis', routename: 'Local Analysis' },
    { route: 'infrastructure', routename: 'Infrastructure and 3D Module' },
    { route: 'workwithus', routename: 'Work with us' },
    { route: 'feedback', routename: 'Feedback' },
    { route: 'contactus', routename: 'Contact Us' },
  ];

  adminroutes = [
    { route: 'homepage', routename: 'Home' },
    { route: 'donations', routename: 'Donations' },
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
}
