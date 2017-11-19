import { HttpRequestService } from './../service/http-request.service';
import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: any;
  private alive: boolean;
  constructor(private httpRequestService: HttpRequestService) {
    this.alive = true;
    this.httpRequestService.getEmotions('api/videos/1/users')
      .first() // only gets fired once
      .subscribe(data => {
        this.users = new Array(Number(data.users_watching));
      })
    IntervalObservable.create(1000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.httpRequestService.getEmotions('api/videos/1/users')
          .subscribe(data => {
            this.users = new Array(Number(data.users_watching));
          })
      });
  }

  ngOnInit() {
  }

}
