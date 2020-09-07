import { Component, OnInit, Input } from '@angular/core';
import { PageDescription } from 'src/app/model/pageDescription';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.scss'],
})
export class PageDescriptionComponent implements OnInit {
  @Input() pageDescription: PageDescription;

  constructor() {}

  ngOnInit(): void {}

  getDescription(): string {
    return this.pageDescription.description.length > 200
      ? this.pageDescription.description.slice(0, 200) + '...'
      : this.pageDescription.description;
  }
}
