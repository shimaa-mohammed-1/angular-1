import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  flag:boolean=false
  errorMessage;


  constructor(private  _AuthenticationService:AuthenticationService ,private _Router:Router ) { };

 loginForm = new FormGroup(
    {
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z]/)]),
    });


    viewData(logindata)
    {
      this._AuthenticationService.sendloginForm(logindata.value).subscribe((data)=>{

        console.log(data)

        if (data.message == "success")
        {
          this._AuthenticationService.savecurrentUser(data.user.first_name,data.user.last_name,data.user.email,data.token)
          this._Router.navigate(['/movies'])


        }
        else
        {
          this.errorMessage=data.message;
          this.flag=true

        }
      })

    };






  ngOnInit(): void {
  }

}
