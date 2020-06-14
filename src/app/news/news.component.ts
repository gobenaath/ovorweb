import { NewsBackendService } from './../service/news-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  pageTitle: string = 'News';
  pageDescription: string =
    'This is new page.  alsdfkfka fda;lkdfja dfadfkadfkasdf as dflkajdf alkasdjfa  alksd aladjslkadsf  asdlfkj';

  newsData: DetailData[];

  constructor(private newsBackendService: NewsBackendService) {}

  ngOnInit(): void {
    this.newsBackendService.getNews().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.newsData = x;
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
