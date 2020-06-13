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
import { SmartClassesComponent } from './smart-classes/smart-classes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { SmartClassesBackendService } from './service/smart-classes-backend.service';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { VillageActiviesComponent } from './village-activies/village-activies.component';
import { CompletedComponent } from './school-activities/completed/completed.component';
import { UpcomingComponent } from './school-activities/upcoming/upcoming.component';
import { PageDescriptionComponent } from './shared/page-description/page-description.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    SchoolActivitiesComponent,
    SmartClassesComponent,
    DetailPageComponent,
    VillageActiviesComponent,
    CompletedComponent,
    UpcomingComponent,
    PageDescriptionComponent,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
