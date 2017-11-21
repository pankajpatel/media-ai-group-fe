import { Injectable } from '@angular/core';

@Injectable()
export class WindowAffdex {

  constructor() { }

  getAffdex() {
    return window['affdex'] || {};
  }

}
