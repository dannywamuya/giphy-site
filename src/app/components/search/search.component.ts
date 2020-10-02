import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
  }

  performSearch(searchItem:string){
    if(searchItem !== ''){
      this.gifService.gifSearch(searchItem);
    }
  }

}
