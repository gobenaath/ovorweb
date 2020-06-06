import { VillageActivitiesBackendService } from './../service/village-activities-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';

@Component({
  selector: 'app-village-activies',
  templateUrl: './village-activies.component.html',
  styleUrls: ['./village-activies.component.scss'],
})
export class VillageActiviesComponent implements OnInit {
  villageActivitiesData: DetailData[];

  constructor(
    private villageActivitiesBackendService: VillageActivitiesBackendService
  ) {}

  ngOnInit(): void {
    this.villageActivitiesBackendService.getVillageActivities().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.villageActivitiesData = x;
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
  detailPage(id: number) {
    console.log('id clicked ' + id);
  }

  myParamObj(id: number) {
    console.log('id obj' + id);
    return {};
  }
}
