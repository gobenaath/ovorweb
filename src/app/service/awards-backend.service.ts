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
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/awards/awd3_1.jpg',
    title: 'Award from JCI Virudhunagar Trust',
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
