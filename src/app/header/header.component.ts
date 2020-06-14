import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  urlString: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
    this.urlString = this.router.url;
  }

  getUrl() {
    if (
      this.urlString === '/schoolActivities' ||
      this.urlString.startsWith('/detailActivity/sa')
    ) {
      return '/schoolActivities';
    } else if (
      this.urlString === '/villageActivities' ||
      this.urlString.startsWith('/detailActivity/va')
    ) {
      return '/villageActivities';
    } else if (
      this.urlString === '/news' ||
      this.urlString.startsWith('/detailActivity/ns')
    ) {
      return '/news';
    }
    return this.urlString;
  }
}
