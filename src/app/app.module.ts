import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // Optional, for pagination
import { MatSortModule } from '@angular/material/sort'; // Optional, for sorting
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeMyOrdrUsrSerivce } from './taskusers/takemyorderusers.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsumerRegistrationPageComponent } from './consumer-registration-page/consumer-registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SignUpComponent } from './signUp/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConsumerRegistrationPageComponent,
    SignUpComponent,
    UserDetailsComponent,
    EditUserDetailsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [TakeMyOrdrUsrSerivce,EditUserDetailsComponent],   
  bootstrap: [AppComponent,]
})
export class AppModule { }
