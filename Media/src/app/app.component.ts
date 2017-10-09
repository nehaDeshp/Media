import { Component } from '@angular/core';
import {FetchMovieDataService} from './fetch-movie-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interest;
  constructor(public data : FetchMovieDataService){
  }

  title = 'app';
}
