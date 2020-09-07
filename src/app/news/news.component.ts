import { NewsBackendService } from './../service/news-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PageDescription } from '../model/pageDescription';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  pageDescription: PageDescription;

  newsData: DetailData[];

  constructor(
    private newsBackendService: NewsBackendService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.newsBackendService.getNews().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.newsData = x;
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
    this.newsBackendService.getPageDescription().subscribe({
      next: (x) => {
        //this.imageObject = x;

        this.pageDescription = x;
      },
      error: (err) =>
        console.error('Error while retreiving page description: ' + err),
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
