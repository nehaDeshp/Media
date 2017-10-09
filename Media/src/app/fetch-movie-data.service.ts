import { Injectable } from '@angular/core';

@Injectable()
export class FetchMovieDataService {

  movieData = [];
  removeMedia = false;
  constructor() { 
    
    this.movieData = [
      { "name":"The Redemption" , "watchedon":"10/12/2017", "type":"Action", "release":"2000"},
      { "name":"The Shawshank Redemption " , "watchedon":"10/12/2017", "type":"Action", "release":"2000"},
      { "name":"The Godfather" , "watchedon":"10/12/2017", "type":"Action", "release":"2000"},
      { "name":"The Dark Knight" , "watchedon":"10/12/2017", "type":"Action", "release":"2000"},
      { "name":" Pulp Fiction " , "watchedon":"10/12/2017", "type":"Action", "release":"2000"},
      { "name":"The Good, the Bad and the Ugly" , "watchedon":"10/12/2017", "type":"Action", "release":"2000"},
      { "name":"Fight Club" , "watchedon":"10/12/2017", "type":"Action", "release":"2000"}
    ]

  }
  removeMediaItem(){
    this.removeMedia = true;
    console.log("In service"+this.removeMedia);
    
  }

}
