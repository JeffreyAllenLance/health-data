import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HealthCategoriesComponent } from './health-categories/health-categories.component';
import { SleepComponent } from './sleep/sleep.component';
import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { WeightComponent } from './weight/weight.component';
import { MirrorTimeComponent } from './mirror-time/mirror-time.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthCategoriesComponent,
    OverviewComponent,
    SleepComponent,
    ActivityComponent,
    WeightComponent,
    MirrorTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
