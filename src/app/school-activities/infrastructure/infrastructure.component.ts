import { InfrastructureBackendService } from './../../service/infrastructure-backend.service';
import { SmartClassesBackendService } from '../../service/smart-classes-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from 'src/app/model/detailData';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss'],
})
export class InfrastructureComponent implements OnInit {
  schoolInfrastructureData: DetailData[];

  constructor(
    private infrastructureBackendService: InfrastructureBackendService
  ) {}

  ngOnInit(): void {
    this.infrastructureBackendService.getSchoolInfrastructure().subscribe({
      next: (x) => {
        this.schoolInfrastructureData = x;
        /* this.completedSchoolActivitiesData = x.filter(
          (activity) => activity.completed === true
        ); */
      },
      error: (err) =>
        console.error('Error while retreiving detail data: ' + err),
    });
  }
}
