import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  pageTitle: string = 'News';
  pageDescription: string =
    'This is new page.  alsdfkfka fda;lkdfja dfadfkadfkasdf as dflkajdf alkasdjfa  alksd aladjslkadsf  asdlfkj';
  constructor() {}

  ngOnInit(): void {}
}
