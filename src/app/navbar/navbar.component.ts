import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ModalComponent } from '../modal/modal.component'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modalRef: MdbModalRef<ModalComponent> | null = null;

  @Output() bgstyle = new EventEmitter<string>();

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.bgstyle.emit();
    this.modalRef = this.modalService.open(ModalComponent)
  }

  ngOnInit(): void {
  }

}
