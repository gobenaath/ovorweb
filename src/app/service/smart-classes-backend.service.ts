import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SmartClassData } from '../model/homeData';
import { DetailData } from '../model/detailData';

@Injectable({
  providedIn: 'root',
})
export class SmartClassesBackendService {
  constructor() {}

  getSmartClassData(): Observable<SmartClassData[]> {
    return of(SmartClassPageData);
  }

  getSchoolActivities(): Observable<DetailData[]> {
    return of(SchoolActivitiesData);
  }
}

const SmartClassPageData = [
  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm7.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
];

const SchoolActivitiesData = [
  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm7.jpg',
    title: 'Government Primary School',
    description: 'Ground Clean Up and Tree Plantation',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    detailDescription:
      'Kavitha K Pandian secured approval from Block Development Officer & a copy was sent to District Collector , Virudhunagar to adopt Kottaiyur Village.',
    subSection: {
      heading: 'Ground Clean Up & Tree Plantation (55 planted, 30 survived)',
      keyValueData: [
        {
          key: 'expense',
          value: 'Rs. 3000 for ground clean up & Tree plantation',
        },
        {
          key: 'fundingPartners',
          value: 'Crowd Funding by Village Youngsters',
        },
      ],
    },
    compareImages: {
      beforeImages: ['assets/img/smartclasses/1.jpg'],
      afterImages: ['assets/img/smartclasses/2.jpg'],
    },
    mainImages: ['assets/img/smartclasses/3.jpg'],
  },
];
