import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chatdialog',
  templateUrl: './chatdialog.component.html',
  styleUrls: ['./chatdialog.component.css']
})
export class ChatdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    Absender: string; Datum:Date; Text: string; Value: number
  },private matDialogRef:MatDialogRef<ChatdialogComponent>
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.data.Text === null || this.data.Value === null){
      this.matDialogRef.close(null)
      
    }
    else{
    this.matDialogRef.close(this.data)
    }
  }

  dialogClose(){
    this.matDialogRef.close();
  }

  safeChatDialog(text:string, amount:string){
    this.data.Text = text;
    this.data.Value = parseInt(amount);
    this.matDialogRef.close();
  }

}
