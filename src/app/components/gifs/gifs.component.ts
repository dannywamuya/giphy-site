import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private gifService: GifService) { }

  gifs: any[] = [];
  subscription: Subscription;

  ngOnInit(): void {
    this.gifService.getTrending();
    this.subscription = this.gifService.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getMore(){
    this.gifService.more();
  }
}
