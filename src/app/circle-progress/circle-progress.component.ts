import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent implements OnInit {

  @Input() value: number;
  @Input() from: number;
  // @Input() suffix: string;
  // @Input() primaryColor: string;
  // @Input() secondaryColor: string;
  @Input() clockWise: Boolean;
  public data: Array<any>;
  public labels: Array<any>;
  public colors: Array<any>;
  public options: any;
  ngOnInit() {
    this.clockWise = this.clockWise || true;
    this.from = this.from || 100;
    // this.primaryColor = this.primaryColor || "rgba(36, 112, 250, 1)";
    // this.secondaryColor = this.secondaryColor || "rgba(0, 0, 0, 0)";
    this.value = Number(this.value);
    this.data = this.clockWise ? [this.value, (this.from - this.value)] : [(this.from - this.value), this.value];
    // this.data = [this.value, 100];
    this.labels = this.data;
    this.options = {
      legend: {
        display: false
      },
    };
    // this.dataset = [{
    //   backgroundColor: [
    //     this.primaryColor,
    //     this.secondaryColor,
    //   ]
    // }];
    // console.log(this.dataset)
  }

}
