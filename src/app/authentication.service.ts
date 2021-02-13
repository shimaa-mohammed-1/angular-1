import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import  {userData} from  './userData'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggin:boolean=false;
  currentUser  =  new BehaviorSubject(null);


// uRL:string="https://routeegypt.herokuapp.com/signup"

  constructor(private _HttpClient:HttpClient ,private _Router:Router)
   {
    if  (localStorage.getItem("userdata")  !=null)
    {
      this.currentUser.next(JSON.parse(localStorage.getItem("userdata")))
    }

   }


  sendRegisterForm(userData):Observable<any>
  {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signup", userData)
  };



  sendloginForm(loginData):Observable<any>
  {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signin", loginData)
  }

  savecurrentUser(firstName, lastName,email,token)
  {
    let user = new userData  (firstName, lastName,email,token)
    localStorage.setItem("userdata",JSON.stringify(user));
    this.currentUser.next(user)
    console.log(this.currentUser)

  }

  logOut()
  {
    this.currentUser.next(null)
    localStorage.clear()
    this._Router.navigate(['/login'])
  }




}
