import { Router } from '@angular/router';
import{ConsumerRegistrationSerivce} from './consumer-registration-page.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consumer-registration-page',
  templateUrl: './consumer-registration-page.component.html',
  styleUrls: ['./consumer-registration-page.component.css']
})
export class ConsumerRegistrationPageComponent implements OnInit{
  constructor(private consumerRegService: ConsumerRegistrationSerivce, private router: Router){}
  
  userData =
  {
    username:'',
    password:''
  };


  ngOnInit(){
   //this.onSubmit();
  }
   
  onSubmit():void{
    console.log('User Data:', this.userData);
    this.consumerRegService.postCosumerRegistration(this.userData).subscribe(
      res => {
      // next:(response: ConsumerRegistrationSerivce[]) => this.userData = response,
      // error:(error: HttpErrorResponse) => alert(error.message)
  }
  );  
  }
}
  

