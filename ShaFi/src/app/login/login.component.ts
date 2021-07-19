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
    //console.log(username, pass);

    this.api.postLogin(LoginData).subscribe((response) => {
      //console.log(response);

      const keys = response.headers.keys();

      const headers = keys.map(
        (key: unknown) => `${key}: ${response.headers.get(key)}`
      );
      sessionStorage.setItem('Token', headers[2].slice(15));
      sessionStorage.setItem('username', username);
      //console.log(sessionStorage.getItem('Token'));

      this.router.navigate(['/home']);
    });
  }
}
