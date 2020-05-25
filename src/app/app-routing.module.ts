import { SmartClassesComponent } from './smart-classes/smart-classes.component';
import { SchoolActivitiesComponent } from './school-activities/school-activities.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'schoolActivities', component: SchoolActivitiesComponent },
  { path: 'smartClasses', component: SmartClassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
