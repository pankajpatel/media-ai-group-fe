import { HttpRequestService } from './service/http-request.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
