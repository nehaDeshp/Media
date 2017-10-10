import { Component, OnInit } from '@angular/core';
import { FetchMovieDataService} from '../fetch-movie-data.service';
@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  interest;
  movies = [];
  watchedOn;
  constructor(public data : FetchMovieDataService) {
  }

  ngOnInit() {
    this.movies =  this.data.movieData;
  }

}
