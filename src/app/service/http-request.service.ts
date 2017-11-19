import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpRequestService {
  private DOMAIN = '//cphsw-env.7rimk8au7d.us-east-1.elasticbeanstalk.com';
  constructor(private http: HttpClient) { }

  getEmotions(path: string) {
    return this.http.get<any>(`${this.DOMAIN}/${path}`);
  }

}
