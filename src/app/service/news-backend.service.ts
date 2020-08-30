import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { DetailData } from '../model/detailData';
@Injectable({
  providedIn: 'root',
})
export class NewsBackendService {
  constructor() {}

  getNews(): Observable<DetailData[]> {
    return of(NewsData);
  }
}

const NewsData = [
  {
    id: 5,
    url: 'https://www.youtube.com/embed/WFfKKui_m4Q',
    type: 'video',
    title: 'Volunteer Arthi sharing Skype Tutoring Experience',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'Volunteer Aarthi Prabhakaran sharing her journey with OurVillageOurResponsiblity team. She is one of our contributors for our society, tutoring English for Govt School Students and sharing her valuable Skype Class experience.',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/SFBeDkASZvY',
    type: 'video',
    title: 'DIGITAL BOARD for Viruthunagar Kottaiyur Village Government School',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'Viruthunagar Kottaiyur Village Government School receives DIGITAL BOARD with the help of Tamil people residing in AMERICA.  This helps for them to setup SMART CLASS.',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/3eLgnPDbMlk',
    type: 'video',
    title: 'NGO contribution for Village Development',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description: 'How Tamil NGO can contribute for their Village Development.',
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/covid/covid1.jpg',
    title: 'Support During Covid-19',
    subTitle: 'OVOR organized support during Covid-19',
    description:
      'Our Village Our Responsiblity team rose funds amounting to Rs. 2,66,537 to support 453 families which includes tribal families.  Daily wage earners, Scheduled Tribes, Differently abled people, Healthcare workers etc from Nagapattinam, Thiruvarur, Vanjivakkam, Trichy, Kottaiyur, Virudhunagar district and Konerikuppam, Vizhupuram districts.',
    subSection: {
      keyValueData: [
        {
          key: 'Fund Raised',
          value: 'Rs. 2,66,537',
        },
        {
          key: 'Total families supported',
          value: '453',
        },

        {
          key: 'Childred & Staff supported',
          value: '41',
        },
        {
          key: 'Items Given',
          value: 'Rice, Groceries, Provisions, Masks',
        },
        {
          key: 'PPE Kit distributed to Hospitals',
          value: '160 Kit',
        },
      ],
    },

    commonImages: [
      {
        title: 'Volunteers and NGO support',
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/covid/covid1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/3.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/4.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/5.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/6.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/7.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/8.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/9.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/10.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/11.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/12.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/13.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/covid/14.jpg',
        ],
      },
    ],
  },
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_7.jpg',
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
