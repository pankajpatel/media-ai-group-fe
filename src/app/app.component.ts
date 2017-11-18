import { Component } from '@angular/core';
import Chart from './chart/chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public charts0Data: Array<Number>;
  public charts1Data: Array<Number>;
  public labels: Array<String>;
  constructor() {
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.charts0Data = [65, 59, 80, 51, 56, 55, 40];
    this.charts1Data = [25, 51, 30, 81, 56, 25, 40];
  }
}
