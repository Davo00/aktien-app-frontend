import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';


@Component({
  selector: 'app-group-history',
  templateUrl: './group-history.component.html',
  styleUrls: ['./group-history.component.css']
})
export class GroupHistoryComponent implements OnInit {

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.Payments);
  }

  // payee, currency, ...
  Payments: { payerName: string; amount: number }[] = [
    { payerName: 'Hendrick', amount: 9999 },
  ];

  addPayment() {
    const dialogRef = this.matDialog.open(AddPaymentDialogComponent, {
      data: {
        payerName: null,
        amount: null,
      },
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        console.log(result);
        this.Payments.push({
          payerName: result.payerName,
          amount: result.amount,
        });
      }
    });
  }

  editGroup(number: number) {
    const dialogref = this.matDialog.open(AddPaymentDialogComponent, {
      data: {
        groupName: this.Payments[number].payerName,
        members: this.Payments[number].amount,
      },
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogref.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        console.log(result);
        this.Payments[number].payerName = result.payerName;
        this.Payments[number].amount = result.amount;
      }
    });
  }
}
