import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { DetailData } from '../model/detailData';
import { PageDescription } from '../model/pageDescription';
@Injectable({
  providedIn: 'root',
})
export class OnGoingProjectsBackendService {
  constructor() {}

  getOnGoingProjects(): Observable<DetailData[]> {
    return of(OnGoingProjectsData);
  }

  getPageDescription(): Observable<PageDescription> {
    return of(PageDescriptionData);
  }
}

const PageDescriptionData = {
  title: 'Project(s) InProgress',
  description:
    'OurVillageOurResponsiblity team has initiated social infrastructure development in various village in Tamilnadu.  This page gives status of those development projects. Please extend your hand to support our villages.',
}

const OnGoingProjectsData = [  
  {
    id: 2,
    url: 'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_4.jpg',
    title: 'Renovating Aramba Sugadharam Maiyam',    
    subTitle:
      'Clearing the area and renovating Aramba Sugadharam Maiyam',
    description:
      'OurVillageOurResponsiblity has initiated a move to clear the land around Kezhvalavu Aramba Sugadhara Maiyam, Mellur District, Madurai Mavattam. As part of this project, OVOR sponsored for clearing the land and repair the building with the help of volunteers.  Please extend your hand to support our villages. ',
    village: 'Kezhvalavu',
    district: 'Mellur',
    subSection: {
      heading: 'Quote for clearing the surronding and renovating Kezhvalvu Aramba Sugadhara Maiyam.  Quote may vary on material cost in future ',
      keyValueData: [
        {
          key: 'Main Building',
          value: 'Rs. 6,80,000',
        },
        {
          key: 'Toilet',
          value: 'Rs. 1,00,000',
        },
        {
          key: 'White Wash',
          value: 'Rs. 2,15,000',
        },
        {
          key: 'Electric Wiring',
          value: 'Rs. 1,25,000',
        },
        {
          key: 'Borewell and pipeline',
          value: 'Rs. 1,20,000',
        },
        {
          key: 'Cleaning in and around Hospital',
          value: 'Rs. 60,000',
        },
        {
          key: 'Compound Wall for 3.5 acre',
          value: 'Rs. 12,00,000',
        },
        
      ],
    },
    compareImages: [
      {
        title: 'Clearing the surrounding area',
        beforeImages: [
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_6.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_4.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_3.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_7.jpg',
        ],
        afterImages: [          
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_c_2.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_c_3.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_c_4.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_c_1.jpg',
        ],
      },
    ],
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/permission.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_1.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_2.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_8.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_9.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_10.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_11.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_12.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_f_13.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_1.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_2.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_3.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_4.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_5.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_6.jpg',
          'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/keelvalavu/va_p_3.jpg',

        ],
      },
    ],
    youtube : 'https://www.youtube.com/embed/xA53ak-PP9g'
  },
  {
    id: 1,
    url: 'https://ovor.s3.us-west-2.amazonaws.com/villageActivities/va7_1.jpg',
    title: 'Adharvana Kaadu',    
    subTitle:
      'Volunteers creating Adharvana Kaadu(forest).',
    description:
      'Volunteers are invited for setting up Adarvana Kaadu in Kotaiyur Village, Vadhrappu Ondriyam, Virudhunagar District.  We need help from volunteers for creating Adarvana forest with more than 500 Tree Samplings.',
    village: 'Kotaiyur',
    district: 'Virudhunagar',
    youtube : 'https://www.youtube.com/embed/b2DfA6AixFI'
  },
];
