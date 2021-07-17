import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmptyError } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  control = new FormControl('', [Validators.required, Validators.email]);
  errorNach: boolean = false; 
  errorGroßVar:boolean = false;
  errorUser: boolean = false;
  date:Date = new Date();


  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  public showError(){
    this.errorNach = !this.errorNach;
  }
  public errorAbfrage(){
    return this.errorNach;
  }
  public errorall(){
    return this.errorGroßVar;
  }
  public erroruser(){
    return this.errorUser;
  }

  public getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }

    return this.control.hasError('email') ? 'Not a valid email' : '';
  }

 

  public handleSubmit(Benutzername: string,email: string,password: string,passwordrep: string,){

    let responses:Object = "";

    if(password !== passwordrep){
      this.showError();
    
    }
    if(password === passwordrep ){
      if(this.errorNach)
      this.showError();

      /* var alterDate = new Date(alter); */
      /* console.log(alterDate) */
    let submit: {email: string; password: string; username: string} = 
    {"email": email, "password": password, "username": Benutzername }

    console.log(submit)


    this.api.postRegister(submit).subscribe(response => {
      console.log(response)
      responses = response;
      if(response.status === 201){
        this.router.navigate(['/login'])
      }
      

    },
    error =>{
      if(error.status !== 500)
      this.errorGroßVar = true;

      if(error.status === 500)
      this.errorUser
      console.log(this.errorGroßVar)
    })
    








    
    }
  }

}
