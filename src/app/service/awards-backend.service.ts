import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { DetailData } from '../model/detailData';
@Injectable({
  providedIn: 'root',
})
export class AwardsBackendService {
  constructor() {}

  getAwards(): Observable<DetailData[]> {
    return of(AwardsData);
  }
}

const AwardsData = [
  {
    id: 7,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd7_1.jpg',
    title: 'Appreciation from Chittal Achi Memorial Elementary School, Kandanur',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd7_1.jpg',
        ],
      },
    ]    
  },
  {
    id: 6,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd6_1.jpg',
    title: 'Appreciation from Panchayat Union Middle School, Edayanthankudi',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd6_1.jpg',
        ],
      },
    ]    
  },
  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd5_1.jpg',
    title: 'Appreciation from V.K.G Residential School, Theni',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd5_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd8_1.jpg',
        ],
      },
    ]    
  },
  {
    id: 4,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd4_1.jpg',
    title: 'Appreciation from Suvadukal Organization',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd4_1.jpg',
        ],
      },
    ]    
  },
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd3_1.jpg',
    title: 'Award from Suvadukal Organization',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd3_1.jpg',
        ],
      },
    ]    
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd1_2.jpg',
    title: 'Social Welfare Funds Award',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd1_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd1_2.jpg',
        ],
      },
    ],
    youtube: 'https://www.youtube.com/embed/NzrqlMr6LIQ'
  },
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_4.jpg',
    title: 'Alliance Club Award',
    commonImages: [
      {       
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_3.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_4.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_5.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/awards/awd2_6.jpg',
        ],
      },
    ],
    youtube : 'https://www.youtube.com/embed/M2_62_v2t7c'
  },
];
