import { HttpRequestService } from './service/http-request.service';
import { Component } from '@angular/core';
import Chart from './chart/chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private httpRequestService: HttpRequestService ) {
    httpRequestService.getRequest('comments');
  }
}
