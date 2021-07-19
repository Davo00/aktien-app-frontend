import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-payment-dialog',
  templateUrl: './edit-payment-dialog.component.html',
  styleUrls: ['./edit-payment-dialog.component.css']
})
export class EditPaymentDialogComponent implements OnInit {
  userPaid: any;
  reason: any;
  amount: any;
  description: any;
  members: any; // List<String> copayerNames
  selfPaid = false;
  Username = this.route.snapshot.paramMap.get('id');

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      userPaid: any;
      reason: string;
      description: string;
      members: string;
      amount: any;
    },
    private route: ActivatedRoute,
    private matDialogRef: MatDialogRef<EditPaymentDialogComponent>
  ) {}

  ngOnInit(): void {
  }

  public selfPaidName(): boolean {
    this.selfPaid = !this.selfPaid;
    if (this.selfPaid) {
      this.data.userPaid = this.Username;
    } else {
      this.data.userPaid = '';
    }
    console.log(this.selfPaid);
    return this.selfPaid;
  }
  
  public dialogSaveGroup(): void {
    this.data.userPaid = this.userPaid;
    this.data.reason = this.reason;
    this.data.description = this.description;
    this.data.members = this.members;
    this.data.amount = this.amount;
    this.matDialogRef.close(this.data);
  }

  public ngOnDestroy(): void {
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

  public dialogClose(): void {
    this.matDialogRef.close();
  }

}
