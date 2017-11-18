import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpRequestService {
  private DOMAIN = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getRequest(path: string) {
    this.http.get<any>(`${this.DOMAIN}/${path}`).subscribe(data => {
      console.log(data);
    });
  }

}
