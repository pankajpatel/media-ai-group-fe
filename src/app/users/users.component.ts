import { HttpRequestService } from './../service/http-request.service';
import { Component, OnInit, Input } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() count: number;
  public users: Array<any>;
  private alive: boolean;
  constructor(private httpRequestService: HttpRequestService) {
    this.alive = true;
    this.count = 0;
    this.users = [];
  }

  ngOnInit() {
    this.users = new Array(Number(this.count));
  }

}
