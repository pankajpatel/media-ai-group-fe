import { Injectable } from '@angular/core';

function _ref(): any {
  return window['affdex'] || {};
}
@Injectable()
export class WindowAffdex {

  constructor() { }

  getAffdex() {
    return _ref();
  }

}
