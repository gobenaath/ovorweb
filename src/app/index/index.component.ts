import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  images = [
    '../../assets/img/homebanner.jpg',
    '../../assets/img/homebanner2.jpg',
    '../../assets/img/homebanner3.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
