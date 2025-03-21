import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import{singUpSerivce} from './signup-page.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../auth.guard.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
      error:(error: HttpErrorResponse)=>{ 
        if (error.status == 409){
          // const errors = error.errors;
        //   this.errorList = error.errors;
        // this.errorList.forEach(err => console.error(err));
      // console.log('Validation Errors:', errors);

          // console.log(error.message);
        // this.error.errors.showError(error.json());
        // console.log(error)
        // this.handleError(error);
        // const errorList: string[] = error.error.errors;
        // console.log('List of errors:', errorList);
        // console.error(
        // `Backend returned code ${error.status}, ` +
        // `body was: ${JSON.stringify(error.error)}`);

        // this.errorMessage = 'Registration Failed' +JSON.stringify(error.error);
        const parseError = JSON.stringify(error.error.errors);
        // console.log(parseError)
        const parsedObject = JSON.parse(parseError);
        
        // parsedObject.forEach((echError) => {
          // console.log(parsedObject.errorCode, parsedObject.errodMessage);

          // });
       
      //  const errorList: errorDetails[]
        // const parsedObject = JSON.parse(parseError);
        // console.log(parsedObject)
        
        // const errormsg = parsedObject.errorMessage;
        this.errorMessage = 'Registration Failed' +parsedObject[0].errorCode +parsedObject[0].errorMessage;
        this.successMessage = '';
      } 
    }     
  });
   }

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);

      if (error.error && error.error.errors) {
        // Access the list of errors from the response
        const errorList: string[] = error.error.errors;
        console.log('List of errors:', errorList);
        // Handle the error list as needed (e.g., display to the user)
      }
    }
    // Return an observable with a user-facing error message
    // return throwError(
    //   'Something went wrong; please try again later.');
  }
}
