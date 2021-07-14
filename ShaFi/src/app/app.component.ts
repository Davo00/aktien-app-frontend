import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ShaFi';

  constructor(public router: Router, private api: ApiService) {}

  clicked: boolean = false;

  ngOnInit(): void {


    //Initiales Login
    	 if(sessionStorage.getItem("Token")  === null ) {
    let data  = {"password": "pass", "username": "Cevin"}
    console.log(data)
    this.api.postLogin(data).subscribe(response => {
      console.log(response)
      const keys = response.headers.keys();

       let headers = keys.map((key: any) =>
       `${key}: ${response.headers.get(key)}`);
      console.log(keys);
      console.log(headers);
      console.log(headers[2].slice(15));
      sessionStorage.setItem("Token", headers[2].slice(15));
      console.log(sessionStorage.getItem("Token")) 
    })
  }

    



    this.api.getAllExpense().subscribe(returnData => {
      console.log(returnData);
    })

    this.api.getSpecificExpense(1).subscribe(returnData => {

      console.log(returnData);
    });
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
