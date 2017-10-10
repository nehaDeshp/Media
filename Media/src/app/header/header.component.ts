import {FetchMovieDataService} from '../fetch-movie-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  int:String;
  selected:String;
  relYr:String;
  constructor(public data:FetchMovieDataService) { }
  ngOnInit() {
  }

  /* Enable form Visibility when a Add a New Movie Button is Clicked */
  btnClick = false;
  addMovie(){
    this.btnClick = true;
  }
  cancelMovieAdd(){
    this.btnClick= false;
  }
  onSubmit(myForm){
    console.log(myForm, "Data = ", this.int);
    console.log(this.selected);
  }
  addToWishList(){
    this.data.add(this.int,this.selected,this.relYr);
    this.cancelMovieAdd();
  }
}
