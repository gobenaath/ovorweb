import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { DetailData } from '../model/detailData';
@Injectable({
  providedIn: 'root',
})
export class VillageActivitiesBackendService {
  constructor() {}

  getVillageActivities(): Observable<DetailData[]> {
    return of(VillageActivitiesData);
  }
}

const VillageActivitiesData = [
  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_6.jpg',
    title: 'Clearing Karuvellam Trees and other Trash fillings',
    subTitle:
      'Volunteers and officials help clearing ground from Karuvellam and other trash fillings.',
    description:
      'Karuvellam and other Trash were cleared in Mengan town in Maharajapuram Panchayat, Virudhunagar District.  Thank you very much to Malathi Union Eng for organizing this  and also thanks to Union Officers, Maharajapuram Panchayat Union Secretary, OurVillageOurResponsibility crew and Mattrame Namadhu Valarchi members.  Thanks to Mr. Suresh, Virudhunagar Project Manager, for guiding, encouraging and sharing many useful information for this event',
    village: 'Maharajapuram',
    district: 'Virudhunagar',
    compareImages: [
      {
        title: 'Ground cleared from Karuvellam and Trash',
        beforeImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_1.jpg',
        ],
        afterImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_7.jpg',
        ],
      },
    ],
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_3.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_4.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_5.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va5_6.jpg',
        ],
      },
    ],
  },
  {
    id: 4,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va3_2.jpg',
    title: 'Grama Sabha Gathering',
    subTitle:
      'Residents and Youths from 6 Village participated in Grama Sabha gathering.',
    district: 'Virudhunagar',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va3_1.jpg',
        ],
      },
    ],
  },
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va3_1.jpg',
    title: 'TASMAC Shop Closure',
    subTitle: 'Villagers organized and took necessary step to close TASMAC',
    description: '',
    district: 'Virudhunagar',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va3_1.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va2_1.jpg',
    title: 'Lake Desilted',
    subTitle: 'Lake Desilted in Kottaiyur, Virudhunagar',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    compareImages: [
      {
        title: 'Lake Desilted',
        beforeImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va2_1.jpg',
        ],
        afterImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va2_2.jpg',
        ],
      },
    ],
  },
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_6.jpg',
    title: 'Two Canals Desiltation',
    subTitle: 'OVOR organized to desilt 2 canals',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'We are proud to announce that below activity of desiltation performed by our team.  It was performed after Kavitha K Pandian secured approval from Block Development Officer & a copy was sent to District Collector , Virudhunagar to adopt Kottaiyur village.  This is to increase water storage capacity and Provide irrigation facility through restoring Canals',
    htmlContent:
      '<h5>Benefits of Desilting Canals: (COMPLETED)</h5><ul class="list-group"><li class="list-group-item">To Supply water to the Agricultural land supporting 920 families dependent on farming.</li><li class="list-group-item">To cultivable land border-radius: 5px;is 240 acre used for Paddy, Cotton, Ground nut cultivation.</li><li class="list-group-item">To Provide benefit to local people, cattle with water supply throughout the year</li></ul>',
    subSection: {
      heading: 'Completed 6 KM & 8 KM respectively',
      keyValueData: [
        {
          key: 'Expense',
          value: 'Rs. 2,58,980',
        },
        {
          key: 'Funded by',
          value: 'AIMS India NGO & NAMCO NGO',
        },

        {
          key: 'Project Start Date',
          value: '1.11.17',
        },
        {
          key: 'Project End Date',
          value: '13.12.17',
        },
      ],
    },
    compareImages: [
      {
        title: 'Canal 1 Desiltation',
        beforeImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_3.jpg',
        ],
        afterImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_4.jpg',
        ],
      },
      {
        title: 'Canal 2 Desiltation',
        beforeImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_5.jpg',
        ],
        afterImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_6.jpg',
        ],
      },
    ],
    commonImages: [
      {
        title: 'Govt Officials Inspection',
        description:
          'Tahsildar, Revenue Inspector, Village Administration officer & Thandal inspecting the work done',
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_7.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_8.jpg',
        ],
      },
    ],
  },
];
