import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-projects',
  templateUrl: './upcoming-projects.component.html',
  styleUrls: ['./upcoming-projects.component.scss'],
})
export class UpcomingProjectsComponent implements OnInit {
  pageTitle: string = 'Upcoming Projects';
  pageDescription: string = 'Page coming soon...';

  constructor() {}

  ngOnInit(): void {}
}
