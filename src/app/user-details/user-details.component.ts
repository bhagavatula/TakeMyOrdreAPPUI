import { Component ,OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
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
import { HttpErrorResponse } from '@angular/common/http'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {User} from './user.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})

export class UserDetailsComponent implements OnInit {
  public dataSource = [];
  public getJsonValue: any;
  displayedColumn: string[] = ['Name', 'age', 'email', 'deliveryAddress','action'];
  // displayedColumns: string[] = ['id', 'name', 'email', 'role'];
   
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   constructor(private autService: AuthService, private router: Router){
    }
  
   ngOnInit(): void {
    this.getAllUsersData();
  }
  // @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

    errorMessage: string = '';
    successMessage: string = '';
  
    getAllUsersData(){
      this.autService.fetchRegisteredUserData().subscribe({
        // console.table(data);
        next:(response) =>{
          this.getJsonValue = response;
          console.table("data is "+response);
          this.dataSource = response;
          // this.dataSource = new MatTableDataSource(somearray);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
          // console.log(response);
          this.successMessage = 'receiving User Successfull';
          this.errorMessage = '';
        },
        error:(error: HttpErrorResponse)=>{
            if (error.status == 409){
            const parseError = JSON.stringify(error.error.errors);
            const parsedObject = JSON.parse(parseError);        
            this.errorMessage = 'Registration Failed' +parsedObject[0].errorCode +parsedObject[0].errorMessage;
            this.successMessage = '';
        } 
      }     
    });
     }


     editUserDate(){
      this.autService.fetchRegisteredUserData().subscribe({
        // console.table(data);
        next:(response) =>{
          this.getJsonValue = response;
          console.table("data is "+response);
          this.dataSource = response;
          this.successMessage = 'receiving User Successfull';
          this.errorMessage = '';
        },
        error:(error: HttpErrorResponse)=>{
            if (error.status == 409){
            const parseError = JSON.stringify(error.error.errors);
            const parsedObject = JSON.parse(parseError);        
            this.errorMessage = 'Registration Failed' +parsedObject[0].errorCode +parsedObject[0].errorMessage;
            this.successMessage = '';
        } 
      }     
    });
     }

}
