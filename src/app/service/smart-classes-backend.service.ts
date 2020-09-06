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
    id: 7,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm12_1.jpg',
    title: 'Panchayat Union Middle School',
    subTitle: 'Smart Class Setup',
    village: 'Alliyalamangalam',
    district: 'Thiruvannamalai',
    completed: true,
    description:
      'Smart Class Room installed in Panchayat Union Middle School, Alliyalamangalam, Thiruvannamalai District.',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm12_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm12_2.jpg',
        ],
      },
    ],
  },
  {
    id: 6,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm10_1.jpg',
    title: 'Government School',
    subTitle: 'Smart Class Setup',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Smart Class Room installed in Government School, Konnerikuppam, Villupuram District.',

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm10_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm10_2.jpg',
        ],
      },
    ],
  },
  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm9_1.jpg',
    title: 'Govt Adi Dravidar Middle School',
    subTitle: 'Smart Class Setup',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Smart Class Room installed in Govt Adi Dravidar Middle School with the help of Tamilnadu Govt and Kottaiyur Villagers.',
    subSection: {
      heading: 'Sponsors',
      keyValueData: [
        {
          key: 'Government of Tamilnadu',
          value: '2/3rd of Fund',
        },
        {
          key: 'Kottaiyur Villagers',
          value: '1/3rd of Fund',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm9_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm9_2.jpg',
        ],
      },
    ],
  },
  {
    id: 4,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm8_1.JPG',
    title: 'Government Higer Secondary School',
    subTitle: 'Smart Class Setup',
    village: 'Maharajapuram',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Smart Class Room installed in Govt Higher Secondary School with the help of Tamilnadu Govt and School Alumini.',
    subSection: {
      heading: 'Sponsors',
      keyValueData: [
        {
          key: 'Government of Tamilnadu',
          value: '2/3rd of Fund',
        },
        {
          key: 'School Alumini',
          value: '1/3rd of Fund',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm8_1.JPG',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm8_2.JPG',
        ],
      },
    ],
  },
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
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm11_1.jpg',
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
