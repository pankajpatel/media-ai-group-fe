import { ChartDataParsingService } from './../service/chart-data-parsing.service';
import { element } from 'protractor';
import { ChartData, GraphData } from './../models/chart-data';
import { Emotions } from './../models/emotions.enum';
import { HttpRequestService } from './../service/http-request.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import color from 'color';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.scss']
})
export class VideoStatsComponent implements OnInit, OnDestroy {
  public lineChartDatasets: Array<ChartData>;
  public lineChartColors: Array<Array<string>>;
  public lineChartOptions: any;
  public graphData: GraphData;
  private alive: boolean;
  keys(): Array<string> {
    const keys = Object.keys(Emotions);
    return keys.slice(keys.length / 2);
  }
  constructor(private httpRequestService: HttpRequestService, private chartDataParsingService: ChartDataParsingService) {
    this.alive = true;
  }

  ngOnInit() {
    this.lineChartDatasets = this.keys().map((chartName: string) => {
      const chartData = this.chartDataParsingService.getDefault()[chartName];
      chartData.data = [];
      return chartData;
    });

    this.httpRequestService.getEmotions('api/videos/2/emotions')
    .first() // only gets fired once
    .subscribe(data => {
      const chartDataAllEmotions = this.chartDataParsingService.parseEmotionsData(data, this.keys());
      this.lineChartDatasets = this.keys().map((chartName: string) => {
        const chartData = this.chartDataParsingService.getDefault()[chartName];
        chartData.data = chartDataAllEmotions[chartName];
        return chartData;
      });
      console.log('this.lineChartDatasets', this.lineChartDatasets);
    });

    // get our data every subsequent 10 seconds
    IntervalObservable.create(1000)
    .takeWhile(() => this.alive) // only fires when component is alive
    .subscribe(() => {
      this.httpRequestService.getEmotions('api/videos/2/emotions').subscribe(data => {
        const chartDataAllEmotions = this.chartDataParsingService.parseEmotionsData(data, this.keys());
        this.lineChartDatasets = this.keys().map((chartName: string) => {
          const chartData = this.chartDataParsingService.getDefault()[chartName];
          chartData.data = chartDataAllEmotions[chartName];
          return chartData;
        });
        console.log('this.lineChartDatasets', this.lineChartDatasets);
      });
    });

    this.lineChartColors = [this.lineChartDatasets.map(chartsData => chartsData.borderColor)];
    this.lineChartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    this.graphData = {
      labels: Array.from(new Array(180), (val, index) => String(index + 1)).slice(Math.max(180 - 30, 1))
    };
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
