import { Component } from '@angular/core';

@Component({
  selector: 'video-stats',
  template: `
    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/QGJuMBdaqIw?loop=1&modestbranding=1" width="560" height="315" frameborder="0"
        allowfullscreen=""></iframe>
      <chart
        color="red"
        name="sad"
        [labels]="labels"
        [data]="charts0Data"></chart>
      <chart
        color="green"
        name="happiness"
        [labels]="labels"
        [data]="charts1Data"></chart>
    </div>
  `,
  styleUrls: ['./videoStats.css']
})
export default class VideoStats {
  public charts0Data: Array<Number>;
  public charts1Data: Array<Number>;
  public labels: Array<String>;
  constructor() {
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.charts0Data = [65, 59, 80, 51, 56, 55, 40];
    this.charts1Data = [25, 51, 30, 81, 56, 25, 40];
  }
}
