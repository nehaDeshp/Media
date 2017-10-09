import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import {FetchMovieDataService} from '../fetch-movie-data.service';
@Component({
  selector: 'app-events-on-items',
  templateUrl: './events-on-items.component.html',
  styleUrls: ['./events-on-items.component.css']
})
export class EventsOnItemsComponent implements OnInit {
  @Input() index;
  vis = -1;
  like=-1;
  constructor(public data: FetchMovieDataService) {
    console.log(this.index);
   }
  
  ngOnInit() {
    
  }
  onWatched(){
    this.vis=1;
  }
  remove(){
    this.data.removeMediaItem();
  }
  liked(){
    this.like = 1;
  }
}
