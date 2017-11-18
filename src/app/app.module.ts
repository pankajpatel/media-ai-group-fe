import { ChartDataParsingService } from './service/chart-data-parsing.service';
import { HttpRequestService } from './service/http-request.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import ChartComponent from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoStatsComponent } from './video-stats/video-stats.component';
import { Page404Component } from './page404/page404.component';

const appRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'stats',
    component: VideoStatsComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: Page404Component }
];


@NgModule({
  declarations: [
    Page404Component,
    DashboardComponent,
    VideoStatsComponent,
    AppComponent,
    ChartComponent
  ],
  imports: [
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    ChartsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HttpRequestService, ChartDataParsingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
