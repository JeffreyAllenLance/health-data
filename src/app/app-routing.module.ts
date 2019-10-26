import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HealthCategoriesComponent } from './health-categories/health-categories.component';
import { OverviewComponent } from './overview/overview.component';
import { SleepComponent } from './sleep/sleep.component';
import { ActivityComponent } from './activity/activity.component';
import { WeightComponent } from './weight/weight.component';
import { MirrorTimeComponent } from './mirror-time/mirror-time.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'health-categories/overview',
    pathMatch: 'full'
  },
  { path: 'health-categories',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HealthCategoriesComponent, outlet: 'always'
      },
      {
        path: 'overview',
        component: OverviewComponent,
        data: {animation: 'overview'}
      },
      {
        path: 'sleep',
        component: SleepComponent,
        data: {animation: 'sleep'}
      },
      {
        path: 'activity',
        component: ActivityComponent,
        data: {animation: 'activity'}
      },
      {
        path: 'weight',
        component: WeightComponent,
        data: {animation: 'weight'}
      },
      {
        path: 'mirror-time',
        component: MirrorTimeComponent,
        data: {animation: 'mirror-time'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
