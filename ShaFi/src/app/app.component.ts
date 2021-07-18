import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ShaFi';

  constructor(public router: Router,
     //private api: ApiService
     ) {}

  clicked = false;
  logedIn = false;
  username: unknown;

  public ngOnInit(): void {
    //Initiales Login
    /* if (sessionStorage.getItem('Token') === null) {
      const data = { password: 'pass', username: 'Cevin' };
      //console.log(data);
      sessionStorage.setItem('username', 'Cevin');
      this.api.postLogin(data).subscribe((response) => {
        //console.log(response);
        const keys = response.headers.keys();

        const headers = keys.map(
          (key: unknown) => `${key}: ${response.headers.get(key)}`
        );
        //console.log(keys);
        //console.log(headers);
        //console.log(headers[2].slice(15));
        sessionStorage.setItem('Token', headers[2].slice(15));
        //console.log(sessionStorage.getItem('Token'));
      });
    }
    sessionStorage.setItem('username', 'Cevin');*/
    if (sessionStorage.getItem('username') !== null) {
      this.username = sessionStorage.getItem('username');
      this.logedIn = true;
    } else {
      this.username = 'username';
      this.logedIn = false;
    } 
  }

//Die Folgenden Methoden werden für das SiteMenü gebraucht
  public thisclicked(): void {
    this.clicked = !this.clicked;
  }

  public isactive(): boolean {
    return this.clicked;
  }

  public islogedIn(): boolean {
    return this.logedIn;
  }

}
