import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../app/environments/environment';
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
    public apiUrl = environment.apiConsuerDataUrl;
    public apiAllConsumerData = environment.apiAllConsuerDataUrl;
    
    constructor(private http: HttpClient) {}
    
    registerUser(userData:any):Observable<any>{
      return this.http.post(this.apiUrl, userData);
    }

    fetchRegisteredUserData():Observable<any>{
      return this.http.get(this.apiAllConsumerData);
    }

    fetchRegisteredUserById(userID:any):Observable<any>{
      return this.http.get(environment.apiConsuerDataIdUrl,userID);
    }
}