import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumerRegistrationPageComponent } from './consumer-registration-page/consumer-registration-page.component';
import { SignUpComponent } from './signUp/sign-up.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';


const routes: Routes = [
  { path: 'consumerPage', component: ConsumerRegistrationPageComponent }, 
  { path: 'signupPage', component: SignUpComponent},
  { path: 'allConsumerData', component: UserDetailsComponent},
  { path: "editConsumerData", component: EditUserDetailsComponent}
  
  // { path: '', redirectTo: '/signupPage', pathMatch: 'full' }, // Default route
  // Add more routes as needed
  // { path: '**', redirectTo: '' } // Default route in case no matches found
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
