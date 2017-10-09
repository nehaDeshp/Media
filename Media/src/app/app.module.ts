import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FetchMovieDataService} from './fetch-movie-data.service';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { EventsOnItemsComponent } from './events-on-items/events-on-items.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    EventsOnItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchMovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
