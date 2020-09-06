import { HomeBackendService } from '../service/home-backend.service';
import { SmartClassesBackendService } from '../service/smart-classes-backend.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { map, startWith } from 'rxjs/operators';
import { HomeData } from '../model/homeData';

@Component({
  selector: 'app-skype-classes',
  templateUrl: './skype-classes.component.html',
  styleUrls: ['./skype-classes.component.scss'],
})
export class SkypeClassesComponent implements OnInit {
  pageTitle: string = 'Skype Class';
  pageDescription: string =
    'Government schools in Tamil Nadu, India are the most Economical and feasible mode to seek Education for kids from economically disadvantaged background.However, due to' +
    'infrastructure and lack of better learning opportunity for English & Computer Science there is high drop outs from Government schools.The parents bear the burden of Loan ' +
    'from private lenders to ensure quality education to their Children for their bright future.This puts debt burden on parents and Government schools are often shut down due to' +
    'very low strength of students hence this leads to deprivation of Social justice to the Children of the parents who are daily wage earners.Most of the students who seek' +
    'education in Government Schools are the Children of Daily wage earner & Farming community. <br/>' +
    '<br/>' +
    'The “School in Cloud” program tries to eradicate this concern by taking English and Computer classes through Skype to the students in government schools.Which will enable' +
    'the Children who cannot afford Private schools to continue their education in Government schools and also allow parents to seek education from government schools thus' +
    'safeguarding themselves from the burden of debt.<br/>' +
    '<br/>' +
    'Online Classes are easy way to reach out & contribute to the society by the Volunteers across globe with a commitment of One hour a Week.Our initiative leverages' +
    'technology to connect volunteers from various parts of world with the students which acts as a motivational factor & an exciting mode of learning for them.The initiative also' +
    'has enabled many Government school teachers to have an opportunity to learn usage of technology and Computers. <br/>' +
    '<br/>' +
    'We conduct classes in 22 Government schools in remote villages of Tamil Nadu, India across 9 Districts covering over 3830 Students every week with over 3475 person hours of' +
    'effort put by Volunteers who teach English, Math & Computer subjects by 117 Teaching & 22 Non Teaching volunteers per month.This sustained initiative not only brings' +
    'education to kids at no expense to their parents, but also establishes a highly repeatable model that can be deployed at scale.<br/>' +
    '<br/>' +
    'Since the permission from the District education officer was available, the headmasters were very cooperative in enabling the sessions.We can very clearly see the' +
    'development of Students Confidence in interacting with new people, learning the language & improvement in Communication along with thought process.This initiative not' +
    'only brings education to Children in a very attractive way, this also comes at no expense to the parents and is a simple model that can be deployed at large scale.<br/>' +
    '<br/>' +
    'Hence the need for these sessions were determined as important & beneficial.';

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

//https://www.npmjs.com/package/ng-image-slider
interface School {
  name: string;
  village: string;
  district: string;
}

const SCHOOLS: School[] = [
  {
    name: 'Annamalai Nadar Unnamalai Ammal higher secondary School',
    village: 'Sivakasi',
    district: 'Virudhunagar',
  },
  {
    name: 'PUPS',
    village: 'Ayan Karisalkulam',
    district: 'Virudhunagar',
  },
  {
    name: 'G.Kallar.HSS E.Pudupatti',
    village: 'Pudupatti',
    district: 'Theni',
  },
  {
    name: 'GHS Thulukapatty',
    village: 'Thulukampatti',
    district: 'Virudhunagar',
  },
  {
    name: 'GHS, Thambipatti ',
    village: 'Thambipatti',
    district: 'Virudhunagar',
  },
  {
    name: 'Govt Adi dravidar Middle School, Kottaiyur ',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
  },
  {
    name: 'GHS Allinagaram ',
    village: 'Allinagaram',
    district: 'Theni',
  },
  {
    name: 'PUMS - Konnerikuppam',
    village: 'Konnerikuppam',
    district: 'Vizhupuram',
  },
  {
    name: 'Govt PUMS, Edayathankudi',
    village: 'Edayanthankudi',
    district: 'Ariyalur',
  },
  {
    name: 'MHSS, Arupukottai',
    village: 'Arupukottai',
    district: 'Virudhunagar',
  },
  {
    name: 'National Primary School, Ayyampalayam',
    village: 'Ayyampalayam',
    district: 'Dindugal',
  },
  {
    name: 'PUMS Jothinagar, Uthangarai ',
    village: 'Uthangarai',
    district: 'Krishnagiri',
  },
  {
    name: 'RG School, Elandaikulam ',
    village: 'Elandaikulam',
    district: 'Virudhunagar',
  },
  {
    name: 'VKG Karunai illam',
    village: 'Uppukottai',
    district: 'Theni',
  },
  {
    name: 'VKG Residency home',
    village: 'Uppukottai',
    district: 'Theni',
  },
  {
    name: 'PUMS',
    village: 'Yembal',
    district: 'Pudukottai',
  },
  {
    name: 'Maharajapuram Primary school',
    village: 'Maharajapuram',
    district: 'Virudhunagar',
  },
  {
    name: 'Govt. Adi Dravidar Welfare Middle school',
    village: 'Agasampatti',
    district: 'Virudhunagar',
  },
  {
    name: 'GHSS Puduppalayam',
    village: 'Rasipuram',
    district: 'Namakkal',
  },
  {
    name: 'PUMS Kandhampalayam',
    village: 'Kandhampalayam',
    district: 'Erode',
  },
];

interface Summary {
  name: string;
  count: string;
  percent?: string;
}

const SummaryData: Summary[] = [
  {
    name: 'Total Teaching Volunteers',
    count: '103',
  },
  {
    name: 'Total Non Teaching Co ordinating Volunteers',
    count: '16',
  },
  {
    name: 'Number of Schools',
    count: '20',
  },
  {
    name: 'Number of Districts',
    count: '9',
  },
  {
    name: 'Total Volunteers',
    count: '119',
  },
  {
    name: 'Total Students covered per Week',
    count: '4066',
  },
  {
    name: 'Total hours of effort per Month by Tutors',
    count: '595',
  },
];

function search(text: string): School[] {
  return SCHOOLS.filter((school) => {
    const term = text.toLowerCase();
    return (
      school.name.toLowerCase().includes(term) ||
      school.village.toLowerCase().includes(term) ||
      school.district.toLowerCase().includes(term)
    );
  });
}
