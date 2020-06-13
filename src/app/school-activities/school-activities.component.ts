import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-activities',
  templateUrl: './school-activities.component.html',
  styleUrls: ['./school-activities.component.scss'],
})
export class SchoolActivitiesComponent implements OnInit {
  pageTitle: string = 'School Activities';
  pageDescription: string =
    'This is school activities.  asdasaa  dfadfk jsdflk lkasjdf ldksfja asdlfadkjasldf asdlf aslkdfajdf zadfklsdf dflk';

  constructor() {}

  ngOnInit(): void {}
}
