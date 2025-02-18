import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({providedIn: 'root'})
export class singUpSerivce{
    public apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }
 
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
    public postCosumerRegistration(userRegistrationData:any){
      // return this.http.post(this.apiServerUrl+'/consumerdata',{username:"Bala"},this.httpOptions);
      // return this.http.post(this.apiServerUrl+'/consumerdata',userRegistrationData,this.httpOptions);
    }
}

