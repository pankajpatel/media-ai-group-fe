import { HttpRequestService } from './../service/http-request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.scss']
})
export class VideoStatsComponent {

  public charts0Data: Array<Number>;
  public charts1Data: Array<Number>;
  public labels: Array<any>;
  constructor(private httpRequestService: HttpRequestService) {
    httpRequestService.getRequest('api/videos/1/emotions');
    this.labels = ['0', '10', '20', '30', '40', '50', '60'];
    this.charts0Data = [65, 59, 80, 51, 56, 55, 40];
    this.charts1Data = [25, 51, 30, 81, 56, 25, 40];
  }

}
