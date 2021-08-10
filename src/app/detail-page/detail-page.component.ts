import { AwardsBackendService } from './../service/awards-backend.service';
import { InfrastructureBackendService } from './../service/infrastructure-backend.service';
import { NewsBackendService } from './../service/news-backend.service';
import { VillageActivitiesBackendService } from './../service/village-activities-backend.service';
import { SmartClassesBackendService } from './../service/smart-classes-backend.service';
import { Component, OnInit } from '@angular/core';
import { DetailData } from '../model/detailData';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OnGoingProjectsBackendService } from '../service/ongoingprojects-backend.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  detailData: DetailData;
  constructor(
    private smartClassesBackendService: SmartClassesBackendService,
    private villageActivitiesBackendService: VillageActivitiesBackendService,
    private newsBackendService: NewsBackendService,
    private infrastructureBackendService: InfrastructureBackendService,
    private awardsBackendService: AwardsBackendService,
    private onGoingProjectsBackendService: OnGoingProjectsBackendService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    console.log(
      'this.route.snapshot.params.id  ' + this.route.snapshot.params.id
    );

    let src: string = this.route.snapshot.params.src;
    if (src === 'ip') {
      this.onGoingProjectsBackendService.getOnGoingProjects().subscribe({
        next: (x) => {
          this.detailData = x.find(
            (data) => data.id === Number(this.route.snapshot.params.id)
          );
        },
        error: (err) =>
          console.error('Error while retreiving vabdetail data: ' + err),
      });
    } else if (src === 'va') {
      this.villageActivitiesBackendService.getVillageActivities().subscribe({
        next: (x) => {
          //this.imageObject = x;

          this.detailData = x.find(
            (data) => data.id === Number(this.route.snapshot.params.id)
          );
        },
        error: (err) =>
          console.error('Error while retreiving vabdetail data: ' + err),
      });
    } else if (src === 'sc') {
      this.smartClassesBackendService.getSmartClassData().subscribe({
        next: (x) => {
          this.detailData = x.find(
            (data) => data.id === Number(this.route.snapshot.params.id)
          );
        },
        error: (err) =>
          console.error('Error while retreiving sc detail data: ' + err),
      });
    } else if (src === 'ns') {
      this.newsBackendService.getNews().subscribe({
        next: (x) => {
          this.detailData = x.find(
            (data) => data.id === Number(this.route.snapshot.params.id)
          );
        },
        error: (err) =>
          console.error('Error while retreiving ns detail data: ' + err),
      });
    } else if (src === 'is') {
      this.infrastructureBackendService.getSchoolInfrastructure().subscribe({
        next: (x) => {
          this.detailData = x.find(
            (data) => data.id === Number(this.route.snapshot.params.id)
          );
        },
        error: (err) =>
          console.error('Error while retreiving is detail data: ' + err),
      });
      
    } else if (src === 'aw') {
      this.awardsBackendService.getAwards().subscribe({
        next: (x) => {
          this.detailData = x.find(
            (data) => data.id === Number(this.route.snapshot.params.id)
          );
        },
        error: (err) =>
          console.error('Error while retreiving is detail data: ' + err),
      });
      
    }
    
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
