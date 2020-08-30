import { InfrastructureBackendService } from './service/infrastructure-backend.service';
import { SmartClassesComponent } from './school-activities/smartclasses/smartclasses.component';

import { InfrastructureComponent } from './school-activities/infrastructure/infrastructure.component';
import { SkypeClassesComponent } from './skype-classes/skype-classes.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { VillageActivitiesBackendService } from './service/village-activities-backend.service';
import { HomeBackendService } from './service/home-backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SchoolActivitiesComponent } from './school-activities/school-activities.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { SmartClassesBackendService } from './service/smart-classes-backend.service';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { VillageActiviesComponent } from './village-activies/village-activies.component';
import { PageDescriptionComponent } from './shared/page-description/page-description.component';
import { CardDisplayComponent } from './shared/card-display/card-display.component';
import { UpcomingProjectsComponent } from './upcoming-projects/upcoming-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    SchoolActivitiesComponent,
    InfrastructureComponent,
    SkypeClassesComponent,
    DetailPageComponent,
    VillageActiviesComponent,
    InfrastructureComponent,
    SmartClassesComponent,
    PageDescriptionComponent,
    CardDisplayComponent,
    UpcomingProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgImageSliderModule,
    TabsModule.forRoot(),
  ],
  providers: [
    DecimalPipe,
    HomeBackendService,
    SmartClassesBackendService,
    VillageActivitiesBackendService,
    InfrastructureBackendService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
