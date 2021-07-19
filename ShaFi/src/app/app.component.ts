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

  clicked = false;
  logedIn= false
  

  public ngOnInit(): void {
    //Initiales Login

    if(sessionStorage.getItem("Token")  === null ) {
      const data  = {"password": "pass", "username": "Cevin"}
      sessionStorage.setItem("username", data.username);
      this.api.postLogin(data).subscribe(response => {
        const keys = response.headers.keys();
        const headers = keys.map((key: any) =>
        `${key}: ${response.headers.get(key)}`);
        sessionStorage.setItem("Token", headers[2].slice(15));
    })
  }
  sessionStorage.setItem("username", "Cevin")    

  }

  public thisclicked():void {
    this.clicked = !this.clicked;
  }

  public isactive():boolean {
    return this.clicked;
  }

  public islogedIn():boolean{
    return this.logedIn
  }

  /* setClasses(){
    let myClasses = {
      MobileSiteMenu: this.clicked == true,
      MobileSiteMenuive: this.clicked != true,
    }
    return myClasses;
  }  */
}
