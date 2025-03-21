import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.guard.service';
import { Router } from '@angular/router';
import { singUpSerivce } from '../signUp/signup-page.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { editUserSerivce } from './edit-user-details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AbstractControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { userModelData } from './interface/edit-user-details.interface';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {
  public dataSource:any;
  public getJsonValue: any;
  // displayedColumn: string[] = ['Name', 'age', 'email', 'deliveryAddress','action'];
  public isEdit: boolean = false;
  public currentTableObj: any;
  public oldTableObj:any;
  errorMessage: string = '';
  successMessage: string = '';
  public parseResponse: any ;
  public parsedObject: any;
  public userData:any
  

  @Input() data: userModelData | undefined;

  public addUserDataForm!: FormGroup;

  public isEditMode = false;

  registrationFields=
  {
    id:'',
    firstname:'',
    lastname:'',
    age:'',
    sex:'',
    email:'',
    dateofbirth:'',
    address:'',    
    zipcode:''
   };


  constructor(public readonly fromBuilder: FormBuilder,private editUserSerice: editUserSerivce,private autService: AuthService , private router: Router){}

  ngOnInit(): void {
    // this.dataSource = response;
    this.initializeEditUserDetailsForm();
    // this.editUserData(this.userData);
  }

  onSubmit():void{
  }

  public clearSubscription():void {
    // if(this.editUserSerice.fetchUserDataById()){
    //   this.editUserSerice.fetchUserDataById().
    // }
  }

  editUserData(userID: String){
    this.editUserSerice.fetchUserDataById(userID).subscribe({   
      next:(response) =>{
        this.getJsonValue = response;
        // debugger;
        this.parseResponse = JSON.stringify(this.getJsonValue );
        this.parsedObject = JSON.parse(this.parseResponse);
        this.isEdit = true;
        this.setEditUserDetailsForm();
        // this.dataSource = parsedObject;
        //  console.log("data is "+this.dataSource);
        this.successMessage = 'Update User Successfull';
        this.errorMessage = '';
      },
      error:(error: HttpErrorResponse)=>{
          if (error.status == 409){
          const parseError = JSON.stringify(error.error.errors);
          const parsedObject = JSON.parse(parseError);        
          this.errorMessage = 'Registration Failed' +parsedObject[0].errorCode +parsedObject[0].errorMessage;
          this.successMessage = '';
          this.isEdit = false;
          this.initializeEditUserDetailsForm();
      } 
    }     
  });
   }

   public setEditUserDetailsForm():void{
    // debugger;
    this.addUserDataForm = this.fromBuilder.group({
      firstname:[this.getJsonValue[0].firstname,[Validators.required]],
      lastname:[this.getJsonValue[0].lastname,[Validators.required]],
      age:[this.getJsonValue[0].age,[Validators.required]],
      sex:[this.getJsonValue[0].sex,[Validators.required]],
      email:[this.getJsonValue[0].email,[Validators.required]],
      dateofbirth:[this.getJsonValue[0].dateofbirth,[Validators.required]],
      address:[this.getJsonValue[0].address,[Validators.required]],
      zipcode:[this.getJsonValue[0].zipcode,[Validators.required]]
    });
    console.log(this.addUserDataForm.get("firstname")?.value);
   }

   public initializeEditUserDetailsForm():void{
    this.addUserDataForm = this.fromBuilder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      age: ['',[Validators.required]],
      sex: ['',[Validators.required]],
      email: ['',[Validators.required]],
      dateofbirth: ['',[Validators.required]],
      address: ['',[Validators.required]],
      zipcode: ['',[Validators.required]]
    });
   }

   
}
