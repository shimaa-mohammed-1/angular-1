import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isloggedin:boolean;


  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router)
  {
    _AuthenticationService.currentUser.subscribe((data)=>{
      if(data !=null)
      {
        this.isloggedin =true
      }
      else{
        this.isloggedin=false
      }

    })

  }
  logout(){
    this._AuthenticationService.logOut()

  }


  ngOnInit(): void {
  }

}
