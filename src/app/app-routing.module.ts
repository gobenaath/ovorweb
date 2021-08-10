import { OnGoingProjectsComponent } from './on-going-projects/on-going-projects.component';
import { AwardComponent } from './award/award.component';
import { SkypeClassesComponent } from './skype-classes/skype-classes.component';
import { UpcomingProjectsComponent } from './upcoming-projects/upcoming-projects.component';

import { VillageActiviesComponent } from './village-activies/village-activies.component';
import { SchoolActivitiesComponent } from './school-activities/school-activities.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'schoolActivities', component: SchoolActivitiesComponent },
  { path: 'skypeClasses', component: SkypeClassesComponent },
  { path: 'villageActivities', component: VillageActiviesComponent },
  { path: 'upcomingProjects', component: UpcomingProjectsComponent },
  { path: 'awards', component: AwardComponent },
  { path: 'detailActivity/:src/:id', component: DetailPageComponent },
  { path: 'onGoingProjects', component: OnGoingProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
