import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpclient: HttpClient) { }
  getDeals(): Observable<any> {
    return this.httpclient.get('http://localhost:3000/deals');
  }
}
