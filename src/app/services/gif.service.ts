import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  gifs = new BehaviorSubject<any>([]);

  private trendingUrl = 'https://api.giphy.com/v1/gifs/trending'
  private searchUrl = 'https://api.giphy.com/v1/gifs/search'
  private api_key = environment.giphyApiKey
  private Limit = 12
  

  constructor(private http: HttpClient) { }
  getTrending(){
    return this.http.get(`${this.trendingUrl}?api_key=${this.api_key}&limit=${this.Limit}`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }
    
  getGifs(){
    return this.gifs.asObservable();
  }
  
  gifSearch(name){
    return this.http.get(`${this.searchUrl}?q=${name}&api_key=${this.api_key}&limit=${this.Limit}`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }

  more(){
    this.Limit = this.Limit + 12;
    return this.http.get(`${this.trendingUrl}?api_key=${this.api_key}&limit=${this.Limit}`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }

}
