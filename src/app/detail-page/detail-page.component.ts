import { VillageActivitiesBackendService } from './../service/village-activities-backend.service';
import { SmartClassesBackendService } from './../service/smart-classes-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  detailData: DetailData;
  constructor(
    private smartClassesBackendService: SmartClassesBackendService,
    private villageActivitiesBackendService: VillageActivitiesBackendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(
      'this.route.snapshot.params.id  ' + this.route.snapshot.params.id
    );
    this.villageActivitiesBackendService.getVillageActivities().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.detailData = x.find(
          (data) => data.id === Number(this.route.snapshot.params.id)
        );
        console.log('detail data ' + JSON.stringify(this.detailData));
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
