import { SmartClassesBackendService } from '../../service/smart-classes-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from 'src/app/model/detailData';

@Component({
  selector: 'app-smartclasses',
  templateUrl: './smartclasses.component.html',
  styleUrls: ['./smartclasses.component.scss'],
})
export class SmartClassesComponent implements OnInit {
  smartClassData: DetailData[];

  constructor(private smartClassesBackendService: SmartClassesBackendService) {}

  ngOnInit(): void {
    this.smartClassesBackendService.getSmartClassData().subscribe({
      next: (x) => {
        this.smartClassData = x;

        /* this.smartClassData = x.filter(
          (activity) => activity.completed !== true
        ); */
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
