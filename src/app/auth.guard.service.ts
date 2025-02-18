import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../app/environments/environment';
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
    public apiUrl = environment.apiConsuerDataUrl;
    constructor(private http: HttpClient) {}
    
    registerUser(userData:any):Observable<any>{
      return this.http.post(this.apiUrl, userData);
    }
}