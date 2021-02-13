import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TVComponent implements OnInit {
  trendingtv:any[];
  imgprefix:string= 'https://image.tmdb.org/t/p/w500/';

  constructor(private  _HomeService:HomeService) {
     _HomeService.getTrending('tv').subscribe((data)=>{
       console.log(data.results)

       data.results.sort(function(a,b){
        return  a.vote_average-b.vote_average
      }).reverse()

       this.trendingtv=data.results.slice(0,10)
     })
  }

  ngOnInit(): void {
  }

}
