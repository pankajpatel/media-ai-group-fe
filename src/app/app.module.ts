import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import Chart from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    Chart,
  ],
  imports: [
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    ChartsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
