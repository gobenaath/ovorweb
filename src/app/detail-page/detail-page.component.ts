import { SmartClassesBackendService } from './../service/smart-classes-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  detailData: DetailData;
  constructor(private smartClassesBackendService: SmartClassesBackendService) {}

  ngOnInit(): void {
    this.smartClassesBackendService.getSchoolActivities().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.detailData = x[0];
        console.log('detail data ' + JSON.stringify(this.detailData));
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
