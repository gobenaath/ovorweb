import { HomeBackendService } from './../service/home-backend.service';
import { SmartClassesBackendService } from './../service/smart-classes-backend.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { map, startWith } from 'rxjs/operators';
import { HomeData } from '../model/homeData';

@Component({
  selector: 'app-smart-classes',
  templateUrl: './smart-classes.component.html',
  styleUrls: ['./smart-classes.component.scss'],
})
export class SmartClassesComponent implements OnInit {
  schools$: Observable<School[]>;
  filter = new FormControl('');
  summaryData: Summary[];
  summaryDataTwo: Summary[];
  imageObject: Array<Object> = [];

  constructor(
    private smartClassesBackendService: SmartClassesBackendService,
    private homeBackendService: HomeBackendService
  ) {
    this.schools$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text))
    );
    this.summaryData = SummaryData;
    this.summaryDataTwo = SummaryDataTwo;
    homeBackendService.getHomePageData().subscribe({
      next: (x) => {
        //this.imageObject = x;

        x.forEach((item) => {
          let homeData: HomeData = item;
          let object = {
            image: homeData.url,
            thumbImage: homeData.url,
            alt: homeData.title,
            title: homeData.title,
          };
          this.imageObject.push(object);
        });
      },
      error: (err) => console.error('Error while retreiving homedata: ' + err),
    });
  }

  ngOnInit(): void {}
}

/* const imageObject: Array<object> = [
  {
    image: 'assets/img/smartclasses/1.jpg',
    thumbImage: 'assets/img/smartclasses/1_t.jpg',
    alt: 'alt of image',
    title: 'title of image',
  };
] */
//https://www.npmjs.com/package/ng-image-slider
interface School {
  name: string;
  subject: string;
  noOfTutors: number;
  noOfStudents: number;
}

const SCHOOLS: School[] = [
  {
    name: 'GHS Poovananthapuram',
    subject: 'English',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Poovananthapuram',
    subject: 'Computer',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Palavantham',
    subject: 'English',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Palavantham',
    subject: 'Computer',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Viswanatham',
    subject: 'English',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Viswanatham',
    subject: 'Computer',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Amathur',
    subject: 'English',
    noOfStudents: 75,
    noOfTutors: 5,
  },
  {
    name: 'GHS Amathur',
    subject: 'Computer',
    noOfStudents: 75,
    noOfTutors: 5,
  },
];

interface Summary {
  name: string;
  count: string;
  percent?: string;
}

const SummaryData: Summary[] = [
  {
    name: 'Total Volunteers',
    count: '28',
  },
  {
    name: 'Number of Schools',
    count: '7',
  },
  {
    name: 'Number of Students: English',
    count: '255',
  },
  {
    name: 'Number of Students: CS',
    count: '84',
  },
  {
    name: 'Number of Students: GK',
    count: '39',
  },
];

const SummaryDataTwo: Summary[] = [
  {
    name: 'Total schools being reached out',
    count: '175',
    percent: '',
  },
  {
    name: 'Classes started',
    count: '6',
    percent: '3',
  },
  {
    name: 'Skype test WIP',
    count: '10',
    percent: '6',
  },
  {
    name: 'Discussion WIP',
    count: '39',
    percent: '22',
  },
  {
    name: 'Infra / connectivity issue',
    count: '86',
    percent: '49',
  },
  {
    name: 'Not reachable or not interested',
    count: '22',
    percent: '13',
  },
  {
    name: 'Yet to call',
    count: '12',
    percent: '7',
  },
];

function search(text: string): School[] {
  return SCHOOLS.filter((school) => {
    const term = text.toLowerCase();
    return (
      school.name.toLowerCase().includes(term) ||
      school.subject.toLowerCase().includes(term)
    );
  });
}
