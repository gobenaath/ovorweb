import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageDescription } from 'src/app/model/pageDescription';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
})
export class SimpleModalComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  @Input() pageDescription: PageDescription;

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  close(): void {
    this.modalRef.hide();
  }
}
