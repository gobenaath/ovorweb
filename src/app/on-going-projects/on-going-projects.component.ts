import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';
import { PageDescription } from '../model/pageDescription';
import { OnGoingProjectsBackendService } from '../service/ongoingprojects-backend.service';

@Component({
  selector: 'app-on-going-projects',
  templateUrl: './on-going-projects.component.html',
  styleUrls: ['./on-going-projects.component.scss']
})
export class OnGoingProjectsComponent implements OnInit {
  pageDescription: PageDescription;

  onGoingProjectsData: DetailData[];

  constructor(
    private onGoingProjectsBackendService: OnGoingProjectsBackendService
  ) { }

  ngOnInit(): void {
    this.onGoingProjectsBackendService.getOnGoingProjects().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.onGoingProjectsData = x;
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
    this.onGoingProjectsBackendService.getPageDescription().subscribe({
      next: (x) => {
        this.pageDescription = x;
        this.pageDescription.title = 'Village Activities';
      },
      error: (err) =>
        console.error('Error while retreiving page description: ' + err),
    });

  }
}




