import { VillageActivitiesBackendService } from './../service/village-activities-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';

@Component({
  selector: 'app-village-activies',
  templateUrl: './village-activies.component.html',
  styleUrls: ['./village-activies.component.scss'],
})
export class VillageActiviesComponent implements OnInit {
  pageTitle: string = 'Village Activities';
  pageDescription: string =
    'This is village activities.  asdasaa  dfadfk jsdflk lkasjdf ldksfja asdlfadkjasldf asdlf aslkdfajdf zadfklsdf dflk';

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
}
