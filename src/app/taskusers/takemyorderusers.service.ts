import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { takemyorderUsrs } from "./tskusr";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({providedIn: 'root'})
export class TakeMyOrdrUsrSerivce{
    public apiServerUrl = environment.apiBaseUrl;
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
       requestOptions = {                                                                                                                                                                                 
        headers: new Headers(this.headerDict), 
      };
    
    
    
    constructor(private http: HttpClient) { }

    public getTakeMyOrdUsrs(): Observable<takemyorderUsrs[]>{
        return this.http.get<takemyorderUsrs[]>(this.apiServerUrl+'/allconsumers/');
        //, this.requestOptions);
        //('GET',this.apiServerUrl,requestOptions,{responseType: 'json'});
        //<takemyorderUsrs[]>('${this.apiServerUrl}/consumers/${2}');
    }
}

