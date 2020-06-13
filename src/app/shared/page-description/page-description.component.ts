import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.scss'],
})
export class PageDescriptionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() {}

  ngOnInit(): void {}
}
