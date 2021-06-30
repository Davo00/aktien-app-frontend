import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { ChatdialogComponent } from '../chatdialog/chatdialog.component';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-group-history',
  templateUrl: './group-history.component.html',
  styleUrls: ['./group-history.component.css'],
  animations: [
    trigger('cardAnimator', [
      // transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      // transition('* => swing', animate(1000, keyframes(kf.swing))),
      // transition('* => jello', animate(1000, keyframes(kf.jello))),
      // transition(
      //   '* => zoomOutRight',
      //   animate(1000, keyframes(kf.zoomOutRight))
      // ),
      transition('* => slideOutLeft', animate(700, keyframes(kf.slideOutLeft))),
      transition(
        '* => slideOutRight',
        animate(700, keyframes(kf.slideOutRight)),
      ),
      // transition(
      //   '* => rotateOutUpRight',
      //   animate(1000, keyframes(kf.rotateOutUpRight))
      // ),
      // transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ]),
  ],
})
export class GroupHistoryComponent implements OnInit {
  animationState: string;
  currentTabChat: boolean;

  constructor(private matDialog: MatDialog) {
    this.animationState = '';
    this.currentTabChat = false;
  }

  startAnimation(state: any) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  Chats: {
    Absender: string;
    Datum: Date;
    Text: string;
    Value: number;
    Mitglieder: string;
  }[] = [
    {
      Absender: 'Peter',
      Datum: new Date(5000000000),
      Text: 'Einkauf von Bier',
      Value: 10,
      Mitglieder: 'Peter, Albani, Renate',
    },
    {
      Absender: 'Ullo',
      Datum: new Date(50000000000),
      Text: 'Einkauf von Bier',
      Value: 10,
      Mitglieder: 'Peter, Albani, Renate',
    },
    {
      Absender: 'Cevin',
      Datum: new Date(500000000000),
      Text: 'Einkauf von Bier für die Party die wir am letzten Sonntag gefeiert haben',
      Value: 10,
      Mitglieder: 'Peter, Albani, Renate',
    },
    {
      Absender: 'Carolina',
      Datum: new Date(500000000000),
      Text: 'Einkauf von Bier',
      Value: 5,
      Mitglieder: 'Peter, Albani, Renate',
    },
    {
      Absender: 'Sabine',
      Datum: new Date(),
      Text: 'Einkauf von Bier',
      Value: 10,
      Mitglieder: 'Peter, Albani, Renate',
    },
    {
      Absender: 'Cevin',
      Datum: new Date(),
      Text: 'Einkauf von Bier',
      Value: 10,
      Mitglieder: 'Peter, Albani, Renate',
    },
    /* {"name": "Gruppe1", "mitglieder": "Harald, Sabine, Peter"}, */
  ];

  ChatDatevar = new Date(0);
  USerName = 'Cevin';
  GroupHistory = false;
  GroupChat = true;

  ngOnInit(): void {
    console.log(this.Chats);
    var scrollclass = document.getElementById('scrollBlock');
    console.log(this.Payments);
    if (scrollclass != null) {
      scrollclass.scrollTop = scrollclass.scrollHeight;

      //Media Query
      var query = window.matchMedia('(min-width: 900px');
      if (query.matches) {
        this.GroupHistory = false;
        this.GroupChat = false;
      } else {
        this.GroupHistory = false;
        this.GroupChat = true;
      }
    }
  }

  isactive(Absender: string) {
    if (Absender === this.USerName) {
      return true;
    } else {
      return false;
    }
  }

  openDialogChatChange(i: number) {
    let dialogref = this.matDialog.open(ChatdialogComponent, {
      data: {
        Absender: this.Chats[i].Absender,
        Datum: this.Chats[i].Datum,
        Text: this.Chats[i].Text,
        Value: this.Chats[i].Value,
        Mitglieder: this.Chats[i].Mitglieder,
      },
      width: '400px',
      height: '400px',
      position: {},
      disableClose: false,
    });

    dialogref.afterClosed().subscribe((result) => {
      console.log(result);
      this.Chats[i].Text = result.Text;
      this.Chats[i].Mitglieder = result.Mitglieder;
      this.Chats[i].Value = result.Value;
      /* this.Infos[number].name = result.Gruppenname;
        this.Infos[number].mitglieder = result.Mitglieder; */
    });
  }

  checkDate(datecheck: Date) {
    /*   console.log(datecheck); */
    /* console.log(this.CheckDatevar); */
    /*     console.log(datecheck.getDate()) */
    /* console.log(this.ChatDatevar) */
    /* console.log(this.ChatDatevar) */
    if (
      datecheck.getDate() == this.ChatDatevar.getDate() &&
      datecheck.getMonth() + 1 == this.ChatDatevar.getMonth() + 1 &&
      datecheck.getFullYear() == this.ChatDatevar.getFullYear()
    ) {
      this.ChatDatevar = datecheck;

      return false;
    } else {
      this.ChatDatevar = datecheck;
      return true;
    }
  }

  // payee, currency, ...
  Payments: { payerName: string; amount: number }[] = [
    { payerName: 'Hendrick', amount: 9999 },
    { payerName: 'Moritz', amount: -9999 },
    { payerName: 'Moayad', amount: 9999 },
    { payerName: 'Davit', amount: 9999 },
    { payerName: 'Hendrick', amount: 9999 },
    { payerName: 'Hendrick', amount: 9999 },
    { payerName: 'Hendrick', amount: 9999 },
    { payerName: 'Hendrick', amount: 9999 },
    { payerName: 'Hendrick', amount: 9999 },
    { payerName: 'Hendrick', amount: 9999 },
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

  public delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  GroupChatButton() {
    this.GroupChat = false;
    this.GroupHistory = true;
  }
  public async SwipeLeft() {
    if (!this.currentTabChat) {
      this.startAnimation('slideOutLeft');
      await this.delay(400);
      this.GroupChatButton();
      this.currentTabChat = true;
    }
  }
  returnChatHistory() {
    return this.GroupChat;
  }
  GroupHistoryButton() {
    this.GroupHistory = false;
    this.GroupChat = true;
  }
  public async SwipeRight() {
    if (this.currentTabChat) {
      this.startAnimation('slideOutRight');
      await this.delay(400);
      this.GroupHistoryButton();
      this.currentTabChat = false;
    }
  }
  returngroupHistory() {
    return this.GroupHistory;
  }
}
