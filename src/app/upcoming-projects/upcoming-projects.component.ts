import { Component, OnInit } from '@angular/core';
import { PageDescription } from '../model/pageDescription';

@Component({
  selector: 'app-upcoming-projects',
  templateUrl: './upcoming-projects.component.html',
  styleUrls: ['./upcoming-projects.component.scss'],
})
export class UpcomingProjectsComponent implements OnInit {
  pageTitle: string = 'Upcoming Projects';
  pageDescription: PageDescription;

  constructor() {}

  ngOnInit(): void {
    this.pageDescription = this.getPageDescription();
  }

  getPageDescription(): PageDescription {
    let pageDescription: PageDescription = new PageDescription();
    pageDescription.title = 'Upcoming Projects';
    pageDescription.description = 'Working on page construction...';
    return pageDescription;
  }
}
