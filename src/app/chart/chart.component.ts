import color from 'color';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export default class ChartComponent implements OnInit {
  @Input() name: string;
  @Input() color: string;
  @Input() data: Array<Number>;
  @Input() labels: Array<String>;

  public lineChartColors: Array<any>;
  public lineChartDatasets: Array<Object>;
  public lineChartOptions: any;
  public chartClicked(e: any): void {
    console.log(e, this);
  }

  public chartHovered(e: any): void {
    console.log(e, this);
  }
  ngOnInit() {
    console.log(this.color);
    this.lineChartDatasets = [{
      label: this.name,
      fill: false,
      data: this.data,
    }];
    this.lineChartColors = [{
      borderColor: color(this.color).toString(),
    }];
    this.lineChartOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
  }
}
