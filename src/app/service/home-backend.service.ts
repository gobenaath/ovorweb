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
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/52.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm2.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm3.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },

  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm5.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },

  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm6.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm_inaug.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
  {
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm7.jpg',
    title: 'Smart Class',
    description: 'Smart classes in our village',
  },
];
