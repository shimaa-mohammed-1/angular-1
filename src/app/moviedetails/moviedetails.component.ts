import { ActivatedRoute } from '@angular/router';
import { HomeService } from './../home.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  type;
  id;
  details:any;
  imgprefix:string= 'https://image.tmdb.org/t/p/w500/';



  constructor(private _HomeService:HomeService ,  private _ActivatedRoute:ActivatedRoute) {
   this.type= _ActivatedRoute.snapshot.paramMap.get("type");
   this.id= _ActivatedRoute.snapshot.paramMap.get("id");


    _HomeService.getItemDetails(this.type,this.id).subscribe((data)=>
    {
      this.details=data
    })

   }

  ngOnInit(): void {
  }

}
