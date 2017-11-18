import { Component, OnInit } from '@angular/core';
import { WindowAffdex } from '../service/window.affdex.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  public affdex: any;

  constructor(private _affdex: WindowAffdex) {
    this.affdex = _affdex.getAffdex();
  }

  ngOnInit() {
    var divRoot = document.querySelector("#affdex_elements");

    // The captured frame's width in pixels
    var width = 640;

    // The captured frame's height in pixels
    var height = 480;

    /*
       Face detector configuration - If not specified, defaults to
       this.affdex.FaceDetectorMode.LARGE_FACES
       this.affdex.FaceDetectorMode.LARGE_FACES=Faces occupying large portions of the frame§
       this.affdex.FaceDetectorMode.SMALL_FACES=Faces occupying small portions of the frame
    */
    var faceMode = this.affdex.FaceDetectorMode.LARGE_FACES;

    //Construct a CameraDetector and specify the image width / height and face detector mode.
    var detector = new this.affdex.CameraDetector(divRoot, width, height, faceMode);
    detector.addEventListener("onInitializeSuccess", console.log);
    detector.addEventListener("onInitializeFailure", console.log);
    detector.detectAllExpressions();
    detector.detectAllEmotions();
    detector.detectAllEmojis();
    detector.detectAllAppearance();
    detector.start();
  }

}
