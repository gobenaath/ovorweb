import { SmartClassesBackendService } from './../../service/smart-classes-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from 'src/app/model/detailData';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent implements OnInit {
  upcomingSchoolActivitiesData: DetailData[];

  constructor(private smartClassesBackendService: SmartClassesBackendService) {}

  ngOnInit(): void {
    this.smartClassesBackendService.getSchoolActivities().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.upcomingSchoolActivitiesData = x.filter(
          (activity) => activity.completed !== true
        );
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
