import { BackendServiceService } from './../service/backend-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private backendSerivce: BackendServiceService) {}

  ngOnInit(): void {
    console.log(
      'this is backend data ' + this.backendSerivce.getHomePageData()
    );
  }
}
