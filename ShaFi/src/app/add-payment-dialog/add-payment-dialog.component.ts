import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-payment-dialog',
  templateUrl: './add-payment-dialog.component.html',
  styleUrls: ['./add-payment-dialog.component.css'],
})
export class AddPaymentDialogComponent implements OnInit {
  payerName: any;
  reason: any;
  members: any;
  amount: any;
  Selfpaid = false;
  Username = 'Cevin';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      payerName: string;
      reason: string;
      members: string; // datatype: member
      amount: any;
    },
    private matDialogRef: MatDialogRef<AddPaymentDialogComponent>
  ) {}

  ngOnInit(): void {}

  public SelpaidName(){
    this.Selfpaid = !this.Selfpaid;
    if (this.Selfpaid) {
      this.data.payerName = this.Username;
    } else {
      this.data.payerName = '';
    }
    console.log(this.Selfpaid);
    return this.Selfpaid;
  }

  public dialogSaveGroup() {
    this.data.payerName = this.payerName;
    this.data.reason = this.reason;
    this.data.members = this.members;
    this.data.amount = this.amount;
    this.matDialogRef.close(this.data);
  }

  public ngOnDestroy() {
    console.log(this.data);
    if (
      this.data.payerName === null ||
      this.data.reason === null ||
      this.data.members === null ||
      this.data.amount === null
    ) {
      this.matDialogRef.close(null);
    } else {
      this.matDialogRef.close(this.data);
    }
  }

  public dialogClose() {
    this.matDialogRef.close();
  }
}
