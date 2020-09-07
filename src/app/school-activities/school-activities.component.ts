import { Component, OnInit } from '@angular/core';
import { PageDescription } from '../model/pageDescription';
import { SmartClassesBackendService } from '../service/smart-classes-backend.service';

@Component({
  selector: 'app-school-activities',
  templateUrl: './school-activities.component.html',
  styleUrls: ['./school-activities.component.scss'],
})
export class SchoolActivitiesComponent implements OnInit {
  pageDescription: PageDescription;

  constructor(private smartClassesBackendService: SmartClassesBackendService) {}

  ngOnInit(): void {
    this.smartClassesBackendService.getPageDescription().subscribe({
      next: (x) => {
        this.pageDescription = x;
      },
      error: (err) =>
        console.error('Error while retreiving page description: ' + err),
    });
  }
}
