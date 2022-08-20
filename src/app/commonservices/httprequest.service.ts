
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  constructor(private http: HttpClient) { }

  baseurl: any = "http://localhost:4000"
  // baseurl:any=""

  postrequest(url: any, data: any): Observable<any> {
    const body = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    return (
      this.http.post(this.baseurl + url, { data: body }).pipe(map((res: any) => {
        let response: any = window.atob(res.data);
        response = JSON.parse(response);
        return response;
      }))
    )
  }
  handleResponse(res: any) {
    return res
  }
}