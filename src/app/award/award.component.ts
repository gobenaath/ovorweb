import { Component, OnInit } from '@angular/core';

import { DetailData } from '../model/detailData';
import { NewsBackendService } from '../service/news-backend.service';
import { PageDescription } from '../model/pageDescription';
import { AwardsBackendService } from '../service/awards-backend.service';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {
  pageDescription: PageDescription;

  awardsData: DetailData[];

  constructor(
    private awardsBackendService: AwardsBackendService,
  ) {}

  ngOnInit(): void {
    this.awardsBackendService.getAwards().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.awardsData = x;
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}