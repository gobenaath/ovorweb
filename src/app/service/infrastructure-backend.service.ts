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
    id: 9,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if5_2.jpg',
    title: 'Government High School',
    subTitle:
      'Refurbished female toilet for Government Hight School, Koomapatti Virudhunagar',
    village: 'Koomapatti',
    district: 'Virudhunagar',
    subSection: {
      heading: 'Donation Detail',
      keyValueData: [
        {
          key: 'Sponsor',
          value: 'Missouri Tamil Sangam',
        },
      ],
    },
    compareImages: [
      {
        beforeImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if5_1.jpg',
        ],
        afterImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if5_2.jpg',
        ],
      },
    ],
  },
  {
    id: 8,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if4_3.jpg',
    title: 'Government High School',
    subTitle:
      'Refurbished female toilet for Government Hight School, Koomapatti Virudhunagar',
    village: 'Koomapatti',
    district: 'Virudhunagar',
    subSection: {
      heading: 'Donation Detail',
      keyValueData: [
        {
          key: 'Sponsor',
          value: 'Missouri Tamil Sangam',
        },
      ],
    },
    compareImages: [
      {
        beforeImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if4_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if4_2.jpg',
        ],
        afterImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if4_3.jpg',
        ],
      },
    ],
  },
  {
    id: 7,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if3_1.jpg',
    title: 'Government Anganwadi Schools',
    subTitle:
      'Furnitures and 3 Ceiling Fans donated for Government Anganwadi Schools. This helps 90 Students and 3 Teachers',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    subSection: {
      heading: 'Donation Detail',
      keyValueData: [
        {
          key: 'Sponsor',
          value: 'Missouri Tamil Sangam',
        },
      ],
    },
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if3_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if3_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if3_3.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if3_4.jpg',
        ],
      },
    ],
  },
  {
    id: 6,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if2_1.jpg',
    title: 'Government Panchayat Union Primary School',
    subTitle:
      '5 Benches donated that helps 25 Students of Government Panchayat Union Primary School',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    subSection: {
      heading: 'Donation Detail',
      keyValueData: [
        {
          key: 'Sponsor',
          value: 'Alagappa Institute of Management 2004 batch',
        },
      ],
    },
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if2_1.jpg',
        ],
      },
    ],
  },
  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if1_1.jpg',
    title: 'Government Middle and High Schools',
    subTitle:
      '20 Benches donated that helps 100 Students of Government Middle and High School',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    subSection: {
      heading: 'Donation Detail',
      keyValueData: [
        {
          key: 'Sponsor',
          value: 'Class AC Tech-88 Chennai',
        },
      ],
    },
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if1_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if1_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if1_3.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if1_4.jpg',
        ],
      },
    ],
  },
  {
    id: 4,
    url:
      'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/infPncUnPrScKotViru_3.JPG',
    title: 'Panchayat Union Primary School Renovation',
    subTitle: 'Renovated Panchayat Union Primary School',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/infPncUnPrScKotViru_1.JPG',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/infPncUnPrScKotViru_2.JPG',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/infPncUnPrScKotViru_3.JPG',
        ],
      },
    ],
  },
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa6_1.jpg',
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
    subTitle:
      'Two toilets renovated in Government Higher School that benefits Lady teachers and Girl students',
    village: 'Thailapuram',
    district: 'Virudhunagar',
    completed: true,
    mainListSection: {
      heading: 'Expenses Details',
      keyValueData: [
        {
          key: 'Funded by',
          value:
            'Actor/Singer/Music Director GV Prakash & Crowd Funding. Balance fund Arunmanian’s donation',
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
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if6_1.jpg',
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
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if6_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa1_3.jpg',
        ],
      },
    ],
  },
];
