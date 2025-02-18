import { Component, OnInit } from '@angular/core';
import { takemyorderUsrs } from './taskusers/tskusr';
import { TakeMyOrdrUsrSerivce } from './taskusers/takemyorderusers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
// implements OnInit{

  public tkrOrdrsCustDtls: takemyorderUsrs[]=[];
  title = 'takemyorderapp';
  constructor(private takemyorderusersservice: TakeMyOrdrUsrSerivce){}
  
  ngOnInit(){
    this.gettakeMyOrdUsrDtls();
  }
  
  public gettakeMyOrdUsrDtls():void{
    this.takemyorderusersservice.getTakeMyOrdUsrs().subscribe({

      next:(response: takemyorderUsrs[]) => this.tkrOrdrsCustDtls = response,
      error:(error: HttpErrorResponse) => alert(error.message)
  });
  }

}
