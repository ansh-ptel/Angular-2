import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }
  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseURL + 'leaders')
      .map(res => { return this.processHTTPMsgService.extractData(res)});
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get(baseURL + 'leaders/' + id)
    .map(res => { return this.processHTTPMsgService.extractData(res);});
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get(baseURL + 'leaders?featured=true')
    .map(res => { return this.processHTTPMsgService.extractData(res)[0]});
  }

}
