import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
   

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public handleSubmit(user: string, pass: string){

   var LoginData: { User: string; Password: string; } = 
   {"User": user, "Password": pass}
    console.log(user, pass)
    
    this.router.navigate([''])
  }

}
