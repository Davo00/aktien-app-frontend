import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-payment-dialog',
  templateUrl: './add-payment-dialog.component.html',
  styleUrls: ['./add-payment-dialog.component.css'],
})
export class AddPaymentDialogComponent implements OnInit {
  amount: any;
  consumerCount: number;
  copayerIds: number[];
  description: string;
  // groupId: number;
  // id: number;
  reason: any;
  // unpaid: boolean;
  userPaid: any;
  members: any;
  selfPaid = false;
  Username = 'Cevin';

  // amount: number;
  // consumerCount: number;
  // copayerIds: number[];
  // description: string;
  // groupId: number;
  // id: number;
  // name: string; // reason
  // unpaid: boolean;
  // userPaid: string; //

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      userPaid: string;
      reason: string;
      members: string; // datatype: member
      amount: any;
    },
    private matDialogRef: MatDialogRef<AddPaymentDialogComponent>
  ) {
    this.amount = 0;
    this.consumerCount = 0;
    this.copayerIds = [];
    this.description = '';
    // groupId: number;
    // id: number;
  }

  ngOnInit(): void {}

  public selfPaidName() {
    this.selfPaid = !this.selfPaid;
    if (this.selfPaid) {
      this.data.userPaid = this.Username;
    } else {
      this.data.userPaid = '';
    }
    console.log(this.selfPaid);
    return this.selfPaid;
  }

  public dialogSaveGroup() {
    this.data.userPaid = this.userPaid;
    this.data.reason = this.reason;
    this.data.members = this.members;
    this.data.amount = this.amount;
    this.matDialogRef.close(this.data);
  }

  public ngOnDestroy() {
    console.log(this.data);
    if (
      this.data.userPaid === null ||
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
