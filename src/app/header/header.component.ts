import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  urlString: string;
  modalRef: BsModalRef;
  constructor(private router: Router, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.urlString = this.router.url;
    
  }

  getUrl() {
    if (
      this.urlString === '/schoolActivities' ||
      this.urlString.startsWith('/detailActivity/sa')
    ) {
      return '/schoolActivities';
    } else if (
      this.urlString === '/villageActivities' ||
      this.urlString.startsWith('/detailActivity/va')
    ) {
      return '/villageActivities';
    } else if (
      this.urlString === '/news' ||
      this.urlString.startsWith('/detailActivity/ns')
    ) {
      return '/news';
    }
    return this.urlString;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  close(): void {
    this.modalRef.hide();
  }

  

  DonationData = {
    title: 'For Donation...',
    description:
      "All donations will be spent on various social activities like developing Government School infrastructure, village infrastructure, need during calamities, etc. " + 
      "<br/><br/><p><b><i>We accept donation only from INDIAN ACCOUNTS</i></b></p>",
    items: [
      {
        title: 'Acc No',
        value: '335601010034211',  
      },
      {
        title: 'IFSC Code',
        value: 'UBIN0533564',  
      },
      {
        title: 'Branch',
        value: 'Watrap',  
      },
      {
        title: 'Customer Id',
        value: '900226910',  
      },
      {
        title: 'Bank',
        value: 'Union Bank Of India',  
      },
      {
        title: 'Registered Trust Id (NGO No)',
        value: '8/BK.4/2020',  
      },
    ]
  }
}
