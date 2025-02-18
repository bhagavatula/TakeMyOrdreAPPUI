import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class ConsumerRegistrationSerivce{
    public apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    // headerDict = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //   }
    //    requestOptions = {                                                                                                                                                                                 
    //     headers: new Headers(this.headerDict), 
    //   };
      
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
    public postCosumerRegistration(userRegistrationData:any){
      // return this.http.post(this.apiServerUrl+'/consumerdata',{username:"Bala"},this.httpOptions);
      return this.http.post(this.apiServerUrl+'/consumerdata',userRegistrationData,this.httpOptions);
    }
}

