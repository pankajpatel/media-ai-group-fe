import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent implements OnInit {

  @Input() value: number;
  @Input() suffix: string;
  @Input() primaryColor: string;
  @Input() secondaryColor: string;
  @Input() clockWise: Boolean;
  public dataset: Array<any>;
  public colors: Array<any>;
  ngOnInit() {
    this.clockWise = this.clockWise || true;
    this.primaryColor = this.primaryColor || "rgba(36, 112, 250, 1)";
    this.secondaryColor = this.secondaryColor || "rgba(0, 0, 0, 0)";
    this.value = Number(this.value);
    this.dataset = [{
      data: this.clockWise ? [this.value, (100 - this.value)] : [(100 - this.value), this.value],
      backgroundColor: [
        this.primaryColor,
        this.secondaryColor,
      ]
    }];
    console.log(this.dataset)
  }

}
