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

  Infos: { name: string; mitglieder: string; }[]  = [
    {"name": "Gruppe1", "mitglieder": "Harald, Sabine, Peter"},
    {"name": "Gruppe2", "mitglieder": "Uwe, Sabine, Peter"},
    {"name": "Gruppe2", "mitglieder": "Uwe, Sabine, Corina"},
   
];
  
  constructor(private matDialog: MatDialog){}

  ngOnInit(): void {

    console.log(this.Infos[0]);
  }
  public openDialogchange(number: number){
    
    let dialogref = this.matDialog.open(DialogwindowComponent,
      {
        data: {
          Gruppenname: this.Infos[number].name,
          Mitglieder: this.Infos[number].mitglieder,
          


        }, width: "500px",
        height:"500px",
        position: {
         
          
        },
        disableClose: false
      });

      dialogref.afterClosed().subscribe( result => {
        console.log(result)
        this.Infos[number].name = result.Gruppenname;
        this.Infos[number].mitglieder = result.Mitglieder;
        
      })
   
  
  }

  /* openDialogClick(){
    let dialogref = this.matDialog.open(DialogwindowComponent,
      {
        data: {
          user: this.user,
          age: this.Age,
          


        }, width: "500px",
        height:"500px",
        position: {
         
          
        },
        disableClose: false
      });

      dialogref.afterClosed().subscribe( result => {
        console.log(result)
        this. = result.user;
        this.Age = result.Age;
      })
   
  } */

  public openDialogClickcreate(){

    let dialogref = this.matDialog.open(DialogwindowComponent,
      {
        data: {
          Gruppenname: null,
          Mitglieder: null,
          


        },

        width: "60vw",
        height:"60vh",
        position: {
          
          
        },
        disableClose: false
      });

      dialogref.afterClosed().subscribe( result => {
        if(result == null){
          
        }else{
        console.log(result)
        this.Infos.push({"name": result.Gruppenname, "mitglieder": result.Mitglieder})
        }
      })

  }

}
