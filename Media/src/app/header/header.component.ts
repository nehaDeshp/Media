import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

int;
  
  constructor() { }
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
    
  }
}
