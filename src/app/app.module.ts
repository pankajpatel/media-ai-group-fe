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
import Page404 from './404';
import VideoStats from './videoStats';
import Dashboard from './dashboard';
import Chart from './chart/chart.component';

const appRoutes: Routes = [

  { path: 'dashboard', component: Dashboard },
  {
    path: 'stats',
    component: VideoStats,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: Page404 }
];


@NgModule({
  declarations: [
    Page404,
    Dashboard,
    VideoStats,
    AppComponent,
    Chart,
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
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
