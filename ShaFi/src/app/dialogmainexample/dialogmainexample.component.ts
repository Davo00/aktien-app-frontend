import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogwindowComponent } from '../dialogwindow/dialogwindow.component';

@Component({
  selector: 'app-dialogmainexample',
  templateUrl: './dialogmainexample.component.html',
  styleUrls: ['./dialogmainexample.component.css']
})
export class DialogmainexampleComponent implements OnInit {

  user = "User";
  Age = 32;
  
  constructor(private matDialog: MatDialog){}

  ngOnInit(): void {
  }

  openDialogClick(){
    let dialogref = this.matDialog.open(DialogwindowComponent,
      {
        data: {
          user: this.user,
          age: this.Age,
          


        }, width: "500px",
        height:"500px",
        position: {
          top: "0px",
          
        },
        disableClose: true
      });

      dialogref.afterClosed().subscribe( result => {
        console.log(result)
        this.user = result.user;
        this.Age = result.Age;
      })
   
  }

}
