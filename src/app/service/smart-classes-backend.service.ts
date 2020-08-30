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
}

const SmartClassPageData = [
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa4_1.jpg',
    title: 'Government Middle School',
    subTitle: 'Smart Class Setup',
    village: 'Edayathankudi',
    district: 'Ariyaloor',
    completed: true,
    description:
      'Our Team member Dr. Hema, in association with Emelda Queen & Annapurna accomplished the Set up of Smart Class, for students.',

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa4_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa4_2.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa3_1.jpg',
    title: 'Government School',
    subTitle: 'Smart Class Setup',
    village: 'Vanaveretty',
    district: 'Villupuram',
    completed: true,
    description:
      'Our Team member Dr. Hema, Mani in association with Annapurna accomplished the Set up of Smart Class, Restoration of Classroom along with furniture for students @ Total expense of Rs. 2,30,000',
    subSection: {
      heading: 'Sponsors',
      keyValueData: [
        {
          key: 'Funded by',
          value:
            'Mani, Village youngsters Rs. 1,50,000 for all the work, labor & furniture',
        },
        {
          key: 'Funded by',
          value: 'Hema Rs. 80,000 for Smart class',
        },
        {
          key: 'Project Start Date',
          value: '9.9.17',
        },
        {
          key: 'Project End Date',
          value: '25.9.17',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa3_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa3_2.jpg',
        ],
      },
    ],
  },
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_1.jpg',
    title: 'Government Higher Secondary School',
    subTitle: 'Smart class inaugurated by MLA Chandra Prabha',
    village: 'Thailapuram',
    district: 'Virudhunagar',
    completed: true,
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
];
