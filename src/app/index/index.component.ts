import { HomeBackendService } from './../service/home-backend.service';

import { Component, OnInit } from '@angular/core';
import { HomeData } from '../model/homeData';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  images = [
    'assets/img/homebanner.jpg',
    'assets/img/homebanner2.jpg',
    'assets/img/homebanner3.jpg',
  ];

  homeData: HomeData[];

  constructor(private homeBackendService: HomeBackendService) {}

  ngOnInit(): void {
    this.homeBackendService.getHomePageData().subscribe({
      next: (x) => {
        this.homeData = x;
      },
      error: (err) => console.error('Error while retreiving homedata: ' + err),
    });
  }
}
