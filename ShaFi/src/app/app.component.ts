import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ShaFi';
  clicked: boolean = false;
  
  constructor(public router: Router) {}

  ngOnInit(): void {}

  thisclicked() {
    this.clicked = !this.clicked;
  }

  isactive() {
    return this.clicked;
  }

  /* setClasses(){
    let myClasses = {
      MobileSiteMenu: this.clicked == true,
      MobileSiteMenuive: this.clicked != true,
    }
    return myClasses;
  }  */
}
