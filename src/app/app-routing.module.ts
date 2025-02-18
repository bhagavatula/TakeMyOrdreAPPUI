import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumerRegistrationPageComponent } from './consumer-registration-page/consumer-registration-page.component';
import { SignUpComponent } from './signUp/sign-up.component';

const routes: Routes = [
  { path: 'consumerPage', component: ConsumerRegistrationPageComponent }, 
  { path: 'signupPage', component: SignUpComponent},
  // { path: '', redirectTo: '/signupPage', pathMatch: 'full' }, // Default route
  // Add more routes as needed
  // { path: '**', redirectTo: '' } // Default route in case no matches found
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
