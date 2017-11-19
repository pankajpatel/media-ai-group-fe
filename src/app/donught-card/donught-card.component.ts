import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'donught-card',
  templateUrl: './donught-card.component.html',
  styleUrls: ['./donught-card.component.scss']
})
export class DonughtCardComponent implements OnInit {
  @Input() value: number;
  @Input() from: number;
  @Input() text: any;
  @Input() secondary: string;
  constructor() { }

  ngOnInit() {
    this.secondary = this.secondary || '';
    this.from = this.from || 100;
    this.text = this.text.split('|');
  }

}
