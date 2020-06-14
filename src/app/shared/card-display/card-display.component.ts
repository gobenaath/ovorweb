import { Component, OnInit, Input } from '@angular/core';
import { DetailData } from 'src/app/model/detailData';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss'],
})
export class CardDisplayComponent implements OnInit {
  @Input() data: DetailData;
  constructor() {}

  ngOnInit(): void {}
}
