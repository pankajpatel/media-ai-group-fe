import { HttpRequestService } from './../service/http-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: any;
  constructor(private httpRequestService: HttpRequestService) {
    this.httpRequestService.getEmotions('api/videos/1/users')
      .first() // only gets fired once
      .subscribe(data => {
        console.log('{}{}{}{}{}{}{}{}}');
        console.log(data);
      })
  }

  ngOnInit() {
  }

}
