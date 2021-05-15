import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { DetailData } from '../model/detailData';
import { PageDescription } from '../model/pageDescription';
@Injectable({
  providedIn: 'root',
})
export class NewsBackendService {
  constructor() {}

  getNews(): Observable<DetailData[]> {
    return of(NewsData);
  }

  getPageDescription(): Observable<PageDescription> {
    return of(PageDescriptionData);
  }
}

const PageDescriptionData = {
  title: 'News',
  description:
    'Kottaiyur village from Virudhunagar District has been adopted & following works has been accomplished',
  items: [
    {
      title:
        'Water Bodies restoration in Kottaiyur village, Virudhunagar District',
      values: [
        'Two Canals 5 km & 6 km each and Two Lake desilted & handed over to Grama Panchayat for maintenance',
        'Two Lakes desilted',
      ],
    },
    {
      title: 'Tree Plantation',
      values: [
        '400 Tree Saplings planted in Government Schools by announcing competition among students to maintain it well.  Prizes distributed to students who took care of their saplings best.',
        '50 Palm tree planted around lake and government schools',
      ],
    },
    {
      title:
        'Street Lights repaired & new lights installed in front of Panchayat Union Primary school, Kottaiyur, Virudhunagar District.',
    },
    {
      title: 'TASMAC shop closed',
      values: [
        'TASMAC shop closed & relocated through grievances raised & multiple follow up through Prime minister’s grievance website.Multiple grievances raised through PM / CM Cell & RTI’s filed to resolve issues in village administration',
      ],
    },
    {
      title: 'Grama Sabha Meetings',
      values: [
        'Youngsters from 6 villages are educated , Informed & Motivated to participate in Grama Sabha meetings and Village administration and raise questions.',
      ],
    },
    {
      title: 'Got public toilet through CM CELL',
    },
    {
      title:
        'Got the local government to lay road for 4 kms for villagers ease through CM CELL',
    },
  ],
};
const NewsData = [  
  {
    id: 10,
    url: 'https://www.youtube.com/embed/T1FQxeuATSA ',
    type: 'video',
    title: 'Oxygen Cylinders and Concentrator Donations ',    
    description:
      'OVOR Team donated 5 Oxygen Cylinders to Kilpauk Medical College to extend helping hands during Covid Pandemic.  Thanks to all donors.',
  },
  {
    id: 9,
    url: 'https://www.youtube.com/embed/MQhnURxNzfc',
    type: 'video',
    title: 'Thinnai Senthil Sir appreciation for Smart Class Volunteers',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'Very happy to hear great feedback about our initiative from Thinnai Senthil Sir. We are extremely happy to have been associated with the Government school in Allinagaram & the students. Thank you very much sir for your appreciation & this will be great motivation to our volunteers',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/WFfKKui_m4Q',
    type: 'video',
    title: 'Volunteer Arthi sharing Skype Tutoring Experience',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'Volunteer Aarthi Prabhakaran sharing her journey with OurVillageOurResponsiblity team. She is one of our contributors for our society, tutoring English for Govt School Students and sharing her valuable Skype Class experience.',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/SFBeDkASZvY',
    type: 'video',
    title: 'DIGITAL BOARD for Viruthunagar Kottaiyur Village Government School',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'Viruthunagar Kottaiyur Village Government School receives DIGITAL BOARD with the help of Tamil people residing in AMERICA.  This helps for them to setup SMART CLASS.',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/3eLgnPDbMlk',
    type: 'video',
    title: 'NGO contribution for Village Development',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description: 'How Tamil NGO can contribute for their Village Development.',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/FKpLKzLjGr8',
    type: 'video',
    title: 'Pudhiya Thalaimurai coverage about OVOR English Skype Classes',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'On behalf of Ourvillageourresponsibility team I am Extremely happy to see impact created by each volunteer among the students. Beyond being a role model I am very proud that the volunteers are able to make the change within the students. I see them confident in speaking with anyone , great change in body language. <br/> <br/> Kudos to all the volunteers as this is not possible without you all. Thank you Senthil Sir for giving us this opportunity.',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/t2hQYuDmxi4',
    type: 'video',
    title: 'Road Laid and Encroachment Removed',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'We have been following up for many civics work from the Kottaiyur Village Panchayat authorities Virudhunagar District. <br/> <br/>At last after 3 years we are able to see new road laid from Kottaiyur to Sundarapandiam Village.  <br/> <br/>We were able to accomplish this through CM Cell. From removal of TASMAC , repair work in water tank, street light, raid on plastic covers in shops, removal of encroachments etc we have been able to successfully leverage CM Cell, PM website, RTI etc to get things done.',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/kk_fY10MHDA',
    type: 'video',
    title: 'Positive Impact for our Classes on English through Skype',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    description:
      'Very happy to see the positive impact of our Classes on English through Skype. Appreciate the effort of volunteers from Ourvillageourresponsibility & Emelda Queen Madam. <br/><br/> Very happy to hear the number of students increased this year and we are happy to be part the development of students in every way possible.<br/><br/>Congratulations Sneha for being the chess champion & Congratulations to all the teachers for continuous growth',
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
