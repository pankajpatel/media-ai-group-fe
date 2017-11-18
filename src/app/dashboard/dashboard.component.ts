import { HttpRequestService } from './../service/http-request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public charts1Data: any;
  public graphData: any;
  constructor(private httpRequestService: HttpRequestService) {

    // console.log(data);
    this.graphData = {
      labels: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180]
    };
    this.charts1Data = [{
      label: 'Happiness',
      data: [25, 51, 30, 81, 56, 25, 40, 50, 89, 10],
      fill: false,
    }]
  }

}
