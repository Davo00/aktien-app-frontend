import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private api: ApiService) {}

  public handleSubmit(username: string, pass: string): void {
    const hash = CryptoJS.SHA3(pass, { outputLength: 256 });
    const passhash = hash.toString(CryptoJS.enc.Base64);

    const LoginData: { username: string; password: string } = {
      password: passhash,
      username: username,
    };

    this.api.postLogin(LoginData).subscribe((response) => {
      console.log("response", response)
     /*  const keys = response.headers.keys();
      const headers = keys.map(
        (key: unknown) => `${key}: ${response.headers.get(key)}`
      ); */
        const token = response.body.jwt
        console.log(token)

        localStorage.setItem('Token', token );
      sessionStorage.setItem('username', username); 	 
      
      this.router.navigate(['/home']);
     
    });
  }
}
