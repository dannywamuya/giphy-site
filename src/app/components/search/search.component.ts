import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  performSearch(searchItem: HTMLInputElement):void {
    console.log(`User entered: ${searchItem.value}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
