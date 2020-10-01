import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { VoteComponent } from './components/vote/vote.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { GifService } from './services/gif.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    VoteComponent,
    GifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
