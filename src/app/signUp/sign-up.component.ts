import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import{singUpSerivce} from './signup-page.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../auth.guard.service';
import { response } from 'express';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private registrationerivce: singUpSerivce, private autService: AuthService, private router: Router){}

  registrationFields=
  {
    firstname:'',
    lastname:'',
    age:'',
    sex:'',
    email:'',
    dateofbirth:'',
    address:'',    
    zipcode:''
   };

  errorMessage: string = '';
  successMessage: string = '';

  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  onSubmit():void{
   }
   register(){
    this.autService.registerUser(this.registrationFields).subscribe({
      next:(response) =>{
        this.successMessage = 'Registration Successfull';
        this.errorMessage = '';
      },
      error:(error)=>{
        if (error.status ==409)
          console.log(error.data);
        // this.showError(error.json());
        this.errorMessage = 'Registration Failed' +error.message;
        this.successMessage = '';
      }      
  });
   }
}
