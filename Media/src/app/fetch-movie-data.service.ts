import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FetchMovieDataService {

  movieData = [];
  removeMedia = false;
  currentTime;
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
  }
  getCurrentDate(index){
    console.log("In service", index);
    this.currentTime = new Date();
    console.log(this.currentTime);
    
    this.movieData[index].watchedon = this.currentTime;
    console.log("Watched : "+this.movieData[index]);
  }
  add(name:String,genre:String,release:String){
    this.movieData.push({
      "name":name,
      "type":genre,
      "release":release
    });
    return this.movieData;
  }
}
