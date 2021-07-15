import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
   

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  public handleSubmit(username: string, pass: string){

   var LoginData: { username: string; password: string; } = 
   {"password": pass, "username": username}
    console.log(username, pass)

    const crypto = require('crypto');

      const secret = 'abcdefg';
      const hash = crypto.createHmac('sha256', secret)
                        .update('I love cupcakes')
                        .digest('hex');
      console.log(hash);


    this.api.postLogin(LoginData).subscribe(response => {
      console.log(response)
      const keys = response.headers.keys();

       let headers = keys.map((key: any) =>
       `${key}: ${response.headers.get(key)}`);
      sessionStorage.setItem("Token", headers[2].slice(15));
      console.log(sessionStorage.getItem("Token"))
    })
    
    //this.router.navigate([''])




  }

}
