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
    const labels = [
      'disgust',
      'anger',
      'contempt',
      'engagement',
      'fear',
      'joy',
      'sadness',
      'surprise',
      'valence',
      'attention',
    ];
    // console.log(data);
    this.graphData = { labels };

    this.httpRequestService.getEmotions('api/videos/1/emotions/stats')
      .first() // only gets fired once
      .subscribe(data => {
        // const chartDataAllEmotions = this.chartDataParsingService.parseEmotionsData(data, this.keys());
        // this.lineChartDatasets = this.keys().map((chartName: string) => {
        //   const chartData = this.chartDataParsingService.getDefault()[chartName];
        //   chartData.data = chartDataAllEmotions[chartName];
        //   return chartData;
        // });
        // console.log('this.lineChartDatasets', this.lineChartDatasets);
        const d = Object.keys(data).reduce((acc, key) => {
          acc.push(data[key]);
          return acc;
        }, []);
        this.charts1Data = [{
          label: 'Video Stats',
          data: d,
          fill: false,
        }]
        console.log(data);
      });

  }

}
