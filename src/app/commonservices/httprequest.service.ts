import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  constructor(private http:HttpClient) { }

  baseurl:any="http://localhost:4000"

  postrequest(url:any,data:any){
    const body = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    return ()=>(
      this.http.post(this.baseurl+url, { data: body }).pipe(((res: any) => {
        let response: any = window.atob(res.data);
        response = JSON.parse(response);
        return response;
      }))
    )
  }
}