import { Emotions } from './../models/emotions.enum';
import { ChartData } from './../models/chart-data';
import color from 'color';
import { Injectable } from '@angular/core';

@Injectable()
export class ChartDataParsingService {

  private chartDefaultData: any = {
    disgust: {
      label: 'disgust',
      fill: false,
      data: [],
      borderColor: <string> color('red').toString()
    },
    anger: {
      label: 'anger',
      fill: false,
      data: [],
      borderColor: <string> color('blue').toString()
    },
    contempt: {
      label: 'contempt',
      fill: false,
      data: [],
      borderColor: <string> color('green').toString()
    },
    engagement: {
      label: 'engagement',
      fill: false,
      data: [],
      borderColor: <string> color('green').toString()
    },
    fear: {
      label: 'fear',
      fill: false,
      data: [],
      borderColor: <string> color('black').toString()
    },
    joy: {
      label: 'joy',
      fill: false,
      data: [],
      borderColor: <string> color('orange').toString()
    },
    sadness: {
      label: 'sadness',
      fill: false,
      data: [],
      borderColor: <string> color('yellow').toString()
    },
    surprise: {
      label: 'surprise',
      fill: false,
      data: [],
      borderColor: <string> color('grey').toString()
    },
    valence: {
      label: 'valence',
      fill: false,
      data: [],
      borderColor: <string> color('red').toString()
    },
    attention: {
      label: 'attention',
      fill: false,
      data: [],
      borderColor: <string> color('blue').toString()
    },
  };
  getDefault() {
    return this.chartDefaultData;
  }

  parseEmotionsData(emotionsData, emotions: Array<string>) {
    const result = {};
    emotions.forEach((emotion) => {
      // initialize emotionsObject
      result[emotion] = [];
    });
    Array.from(new Array(180), (val, index) => String(index)).slice(Math.max(180 - 30, 1)).forEach((time: string) => {
        const emotionsDataInASpecificTime = emotionsData[time];
        emotions.forEach((emotion) => {
          if (emotionsDataInASpecificTime) {
            result[emotion].push(emotionsDataInASpecificTime[emotion]);
          } else {
            result[emotion].push(undefined);
          }
        });
    });
    console.log('data recieved', result);
    return result;
  }

}
