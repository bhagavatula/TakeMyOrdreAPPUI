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
import { DataSource } from '@angular/cdk/collections';
import { editUserSerivce } from '../edit-user-details/edit-user-details.service';
import { EditUserDetailsComponent } from '../edit-user-details/edit-user-details.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})

export class UserDetailsComponent implements OnInit {
  public dataSource = [];
  public getJsonValue: any;
  displayedColumn: string[] = ['Name', 'age', 'email', 'deliveryAddress','action'];
  public isEdit: boolean = false;
  public currentTableObj: any;
  public oldTableObj:any;
  errorMessage: string = '';
  successMessage: string = '';
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   constructor(private autService: AuthService, private editUserComponent: EditUserDetailsComponent,private router: Router){
    }
  
   ngOnInit(): void {
    this.getAllUsersData();
  }

  OnEdit(arg1: String[]):void{
    // debugger;
    this.isEdit = true;
    const strObj = JSON.stringify(arg1);
    const newObj = JSON.parse(strObj);
    this.oldTableObj = newObj;
    // console.log(this.oldTableObj)
    this.editUserComponent.editUserData(this.oldTableObj);
    // this.editUserComponent.userData = (this.oldTableObj);
  }

  onCancel(arg1: String[]):void{
    this.isEdit = false;
    const strObj = JSON.stringify(arg1);
    const newObj = JSON.parse(strObj);
    
  }
    
      
    getAllUsersData(){
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
// function editUserData(oldTableObj: any) {
//   throw new Error('Function not implemented.');
// }

