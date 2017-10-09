import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FetchMovieDataService} from './fetch-movie-data.service';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { EventsOnItemsComponent } from './events-on-items/events-on-items.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    EventsOnItemsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [FetchMovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
