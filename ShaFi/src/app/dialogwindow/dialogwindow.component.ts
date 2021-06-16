import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialogwindow',
  templateUrl: './dialogwindow.component.html',
  styleUrls: ['./dialogwindow.component.css']
})
export class DialogwindowComponent implements OnInit {

  user: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    user: String, age: number
  },private matDialogRef:MatDialogRef<DialogwindowComponent>
  ) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    this.matDialogRef.close(this.data)
  }

  dialogClose(){
    this.matDialogRef.close();
  }

  dialogSavenewInfo(){

    this.data.user = this.user;
    this.matDialogRef.close(this.data)
    
  }
  

}
