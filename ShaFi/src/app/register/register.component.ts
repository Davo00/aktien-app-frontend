import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  control = new FormControl('', [Validators.required, Validators.email]);
  errorNach: boolean = false;
  date:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  showError(){
    this.errorNach = !this.errorNach;
  }
  errorAbfrage(){
    return this.errorNach;
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }

    return this.control.hasError('email') ? 'Not a valid email' : '';
  }

  handleSubmit(Benutzername: string,email: string,password: string,passwordrep: string,){

    if(password !== passwordrep){
      this.showError();
    
    }
    if(password === passwordrep ){
      if(this.errorNach)
      this.showError();

      /* var alterDate = new Date(alter); */
      /* console.log(alterDate) */
    var submit: {Benutzername: string; Email: string; Password: string} = 
    {"Benutzername": Benutzername, "Email": email, "Password": password}

    console.log(submit)
    
    }
  }

}
