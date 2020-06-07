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
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm7.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
];

const SchoolActivitiesData = [
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_2.jpg',
    title: 'Government Primary School',
    subTitle: 'Ground Clean Up and Tree Plantation',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
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
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_1.jpg',
    title: 'Government Higher Secondary School',
    subTitle: 'Smart class inaugurated by MLA Chandra Prabha',
    village: 'Thailapuram',
    district: 'Virudhunagar',
    mainListSection: {
      heading: 'Expenses Details',
      keyValueData: [
        {
          key: '1.5 Lakhs',
          value:
            'Smart board, Projector, Mount kit, Keyboard, Mouse, Speaker, PC, UPS, Greenboard',
        },
        {
          key: '21,600',
          value: 'Tiles',
        },

        {
          key: '38,173',
          value: 'Painting, flex, white wash, labor charges etc',
        },
        {
          key: '28,000',
          value: 'For doodle / thiruvalluvar painting',
        },
      ],
    },

    subSection: {
      keyValueData: [
        {
          key: 'Total Expenses',
          value: 'Rs. 2,37,773',
        },
        {
          key: 'Funded by',
          value: 'Kavitha K Pandian',
        },

        {
          key: 'Project Start Date',
          value: '23.5.17',
        },
        {
          key: 'Project End Date',
          value: '13.6.17',
        },
      ],
    },

    commonImages: [
      {
        title: 'Class Room Inauguration',
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm6.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_2.jpg',
        ],
      },
      {
        title: 'Appreciation letter from Thailapuram HM',
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_3.JPG',
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
