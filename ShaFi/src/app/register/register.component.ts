import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  control = new FormControl('', [Validators.required, Validators.email]);
  errorNach = false;
  errorGroßVar = false;
  errorUser = false;
  date: Date = new Date();

  constructor(private router: Router, private api: ApiService) {}

  public showError():void {
    this.errorNach = !this.errorNach;
    
  }
  public errorAbfrage():boolean {
    return this.errorNach;
  }
  public errorall():boolean {
    return this.errorGroßVar;
  }
  public erroruser():boolean {
    return this.errorUser;
  }

  public getErrorMessage():string {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }

    return this.control.hasError('email') ? 'Not a valid email' : '';
  }

  public handleSubmit(
    Benutzername: string,
    email: string,
    password: string,
    passwordrep: string
  ):void {
    if (password !== passwordrep) {
      this.showError();
    }
    if (password === passwordrep) {
      if (this.errorNach) this.showError();
      console.log(password);

      const hash = CryptoJS.SHA3(password, { outputLength: 256 });
      const passhash = hash.toString(CryptoJS.enc.Base64);
      const submit: { email: string; password: string; username: string } = {
        email: email,
        password: passhash,
        username: Benutzername,
      };

      console.log(submit);

      this.api.postRegister(submit).subscribe(
        (response) => {
          console.log(response);
          if (response.status === 201) {
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          if (error.status !== 500) this.errorGroßVar = true;

          if (error.status === 500) this.errorUser=true;
          console.log(this.errorGroßVar);
        }
      );
    }
  }
}
