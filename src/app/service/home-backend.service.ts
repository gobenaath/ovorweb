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
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if1_4.jpg',
    title: 'Furniture Donation',
    description: 'Benches Donated for Government School',
  },
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va1_6.jpg',
    title: 'Village Activities',
    description: 'Canal Desilted',
  },

  {
    id: 4,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if3_4.jpg',
    title: 'Government School Infrastructure',
    description: 'Donated Chair for Anganvadi School Kids',
  },

  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/villageActivities/va4_5.jpg',
    title: 'Government School Renovations',
    description: 'Educational Drawing in Government School',
  },
  {
    id: 6,
    url: 'https://ovor.s3.us-west-2.amazonaws.com/awards/awd6_1.jpg',
    title: 'Awards',
    description: 'One of the Appreciation Certificate',
  },
  {
    id: 7,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/if9_1.jpg',
    title: 'Donation',
    description: 'NEET Preparation Book Donated',
  },
];
