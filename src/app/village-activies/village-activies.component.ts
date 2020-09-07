import { VillageActivitiesBackendService } from './../service/village-activities-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';
import { NewsBackendService } from '../service/news-backend.service';
import { PageDescription } from '../model/pageDescription';

@Component({
  selector: 'app-village-activies',
  templateUrl: './village-activies.component.html',
  styleUrls: ['./village-activies.component.scss'],
})
export class VillageActiviesComponent implements OnInit {
  pageDescription: PageDescription;

  villageActivitiesData: DetailData[];

  constructor(
    private villageActivitiesBackendService: VillageActivitiesBackendService,
    private newsBackendService: NewsBackendService
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
    this.newsBackendService.getPageDescription().subscribe({
      next: (x) => {
        this.pageDescription = x;
        this.pageDescription.title = 'Village Activities';
      },
      error: (err) =>
        console.error('Error while retreiving page description: ' + err),
    });
  }
}
