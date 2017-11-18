import color from 'color';
import { Component, Input, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html'
})
export default class Chart implements OnInit{
  @Input() name: string;
  @Input() color: string;
  @Input() data: Array<Number>;
  @Input() labels: Array<String>;

  public lineChartColors: Array<any>;
  public lineChartDatasets: Array<Object>;
  public chartClicked(e: any): void {
    console.log(e, this);
  }

  public chartHovered(e: any): void {
    console.log(e, this);
  }
  ngOnInit() {
    console.log(this.color)
    this.lineChartDatasets = [{
      label: this.name,
      fill: false,
      data: this.data,
    }];
    this.lineChartColors = [{
      borderColor: color(this.color).toString(),
    }];
  }
}
