import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialogwindow',
  templateUrl: './dialogwindow.component.html',
  styleUrls: ['./dialogwindow.component.css']
})
export class DialogwindowComponent implements OnInit {

  Gruppenname: any;
  Mitglieder: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    Gruppenname: String, Mitglieder: String
  },private matDialogRef:MatDialogRef<DialogwindowComponent>
  ) { }

  ngOnInit(): void {
    
  }

  public ngOnDestroy(){
    console.log(this.data)
    if(this.data.Gruppenname === null || this.data.Mitglieder === null){
      this.matDialogRef.close(null)
      
    }
    else{
    this.matDialogRef.close(this.data)
    }
  }

  public dialogClose(){
    this.matDialogRef.close();
  }

  public dialogSavenewInfo(){

    this.data.Gruppenname = this.Gruppenname;
    this.data.Mitglieder = this.Mitglieder;
    this.matDialogRef.close(this.data)
    
  }
  

}
