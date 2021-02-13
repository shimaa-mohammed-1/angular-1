import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{AuthenticationService} from  '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  flag:boolean=false

  constructor(private _AuthenticationService:AuthenticationService   ,  private _Router:Router) { }



    profileForm = new FormGroup(
    {
      first_name: new FormControl(null,[Validators.required,Validators.max(15),Validators.min(3)]),
      last_name: new FormControl(null,[Validators.required,Validators.max(15)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z]/)]),
      age: new FormControl(null,[Validators.required]),

    });



    viewData(data)
    {

       this._AuthenticationService.sendRegisterForm(data.value).subscribe((data)=>{
         
          if(data.message == "success")
          {
            this._Router.navigate(['/login'])
          }
          else
          {
           this.flag=true
          }
       })

    };



  ngOnInit(): void {
  }

}
