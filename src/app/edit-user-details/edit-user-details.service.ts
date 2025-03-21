import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({providedIn: 'root'})
export class editUserSerivce{
    // public apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }
 
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      fetchUserDataById(userId:any):Observable<any>{
        return this.http.get(environment.apiConsuerDataIdUrl+userId);
      }
 
}

