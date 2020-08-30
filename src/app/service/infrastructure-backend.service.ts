import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SmartClassData } from '../model/homeData';
import { DetailData } from '../model/detailData';

@Injectable({
  providedIn: 'root',
})
export class InfrastructureBackendService {
  constructor() {}

  getSchoolInfrastructure(): Observable<DetailData[]> {
    return of(SchoolActivitiesData);
  }
}

const SchoolActivitiesData = [
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa5_1.jpg',
    title: 'Kottaiyur Government Primary School',
    subTitle: 'To install Benches, Fan and Tables for Students',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa6_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa6_2.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa5_1.jpg',
    title: 'Government Higher School',
    subTitle: 'Two toilets for Lady Teachers & 4 for Girl Students',
    village: 'Thailapuram',
    completed: true,
    mainListSection: {
      heading: 'Expenses Details',
      keyValueData: [
        {
          key: 'Funded by',
          value:
            'Crowd Funding Edudharma Rs. 1,21,118 Balance by Arunmanian’s donation',
        },
        {
          key: 'Total expense',
          value: 'Rs. 1,36,677',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa5_1.jpg',
        ],
      },
    ],
  },
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_2.jpg',
    title: 'Government Primary School',
    subTitle: 'Ground Clean Up and Tree Plantation',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Kavitha K Pandian secured approval from Block Development Officer & a copy was sent to District Collector , Virudhunagar to adopt Kottaiyur Village.',
    subSection: {
      heading: 'Ground Clean Up & Tree Plantation (55 planted, 30 survived)',
      keyValueData: [
        {
          key: 'Expense',
          value: 'Rs. 3000 for ground clean up & Tree plantation',
        },
        {
          key: 'Funding Partners',
          value: 'Crowd Funding by Village Youngsters',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_3.jpg',
        ],
      },
    ],
  },
];
