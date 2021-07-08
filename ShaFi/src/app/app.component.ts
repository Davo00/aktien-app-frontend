import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ApiService} from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ShaFi';
 

  constructor(public router: Router, private api:ApiService) {  
  }

  clicked: boolean=false;



  ngOnInit(): void {
    this.api.getAllExpense().subscribe(returnData => {
      console.log(returnData);
    })

    this.api.getSpecificExpense(1).subscribe(returnData => {
      console.log(returnData);
    })
  }

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
