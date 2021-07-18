import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chatdialog',
  templateUrl: './chatdialog.component.html',
  styleUrls: ['./chatdialog.component.css'],
})
export class ChatdialogComponent implements OnInit {
  textalt = '';
  valuealt: any;
  Mitgliederalt = '';
  delete = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Absender: string;
      Text: string;
      Value: number;
      Mitglieder: string;
      ID: number;
      delete: boolean;
    },
    private matDialogRef: MatDialogRef<ChatdialogComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.Mitgliederalt = this.data.Mitglieder;
    this.valuealt = this.data.Value;
    this.textalt = this.data.Text;
    this.data.delete = this.delete;
  }

  public ngOnDestroy() {
    console.log(this.data);

    if (
      this.data.Text === null ||
      this.data.Value === null ||
      this.data.Value === 0 ||
      this.data.Text === '' ||
      this.data.Mitglieder === ''
    ) {
      this.matDialogRef.close(null);
    } else if (
      this.data.Mitglieder === this.Mitgliederalt &&
      this.data.Value === this.valuealt &&
      this.data.Text === this.textalt
    ) {
      this.matDialogRef.close(null);
    } else {
      console.log('else');
      this.matDialogRef.close(this.data);
    }
  }

  public dialogClose() {
    this.matDialogRef.close(null);
  }

  public safeChatDialog(text: string, amount: string, mitglieder: string) {
    this.data.Text = text;
    console.log(amount);
    this.data.Value = parseInt(amount);
    this.data.Mitglieder = mitglieder;
    this.matDialogRef.close(this.data);
  }

  public deleteexpense() {
    this.data.delete = true;
    this.data.Value = 10;
    this.matDialogRef.close(this.data);
    //this.apiService.deleteExpenseById(this.data.ID)
  }
}
