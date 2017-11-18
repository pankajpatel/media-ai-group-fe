import { ChartData, GraphData } from './../models/chart-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export default class ChartComponent {
  @Input() lineChartDatasets: Array<ChartData>;
  @Input() lineChartColors: Array<Array<string>>;
  @Input() lineChartOptions: Array<string>;
  @Input() graphData: GraphData;

  public chartClicked(e: any): void {
    console.log(e, this);
  }

  public chartHovered(e: any): void {
    console.log(e, this);
  }

}
