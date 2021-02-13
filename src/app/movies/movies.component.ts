import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingmovies:any[];
  imgprefix:string= 'https://image.tmdb.org/t/p/w500/';
  word:any;

  constructor(private _HomeService:HomeService )
   {
     this._HomeService.getTrending('movie').subscribe((data)=>
     {
      data.results.sort(function(a,b){
      return  a.vote_average-b.vote_average
    }).reverse()

    this.trendingmovies =  data.results.slice(0,10)
  }

   )
  }


  ngOnInit(): void {
  }

}
