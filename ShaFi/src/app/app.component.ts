import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ShaFi';
 

  constructor(public router: Router) { }

  clicked: boolean=false;



  ngOnInit(): void {
  }
  closeBar(): void{(e: { key: any; }) =>{
    if(this.clicked && e.key == 'Escape') {
      this.clicked = false;
      
  }}}





  thisclicked(){
    this.clicked = !this.clicked;
    
  }

  

  

  isactive(){
    
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

