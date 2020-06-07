import { SmartClassesBackendService } from './../../service/smart-classes-backend.service';
import { VillageActivitiesBackendService } from './../../service/village-activities-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from 'src/app/model/detailData';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedSchoolActivitiesData: DetailData[];

  constructor(private smartClassesBackendService: SmartClassesBackendService) {}

  ngOnInit(): void {
    this.smartClassesBackendService.getSchoolActivities().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.completedSchoolActivitiesData = x.filter(
          (activity) => activity.completed === true
        );
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
