import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HomeData } from '../model/homeData';

@Injectable({
  providedIn: 'root',
})
export class HomeBackendService {
  constructor() {}

  getHomePageData(): Observable<HomeData[]> {
    return of(HomePageData);
  }
}

const HomePageData = [
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/52.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm2.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm3.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },

  {
    id: 4,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm5.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },

  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm6.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    id: 6,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm_inaug.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    id: 7,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm7.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
];
