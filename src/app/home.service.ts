import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private _HttpClient:HttpClient) { }

  getTrending(media_type):Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/${media_type}/day?api_key=4b7a93d5e32de52205483b497659448e')

  }

  getItemDetails(media_type,id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=4b7a93d5e32de52205483b497659448e&language=en-US`)

  }

}
