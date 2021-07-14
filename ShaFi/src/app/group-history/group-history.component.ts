import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { ChatdialogComponent } from '../chatdialog/chatdialog.component';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { GroupOverviewComponent } from '../group-overview/group-overview.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-group-history',
  templateUrl: './group-history.component.html',
  styleUrls: ['./group-history.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(700, keyframes(kf.slideOutLeft))),
      transition(
        '* => slideOutRight',
        animate(700, keyframes(kf.slideOutRight))
      )
    ]),
  ],
})
export class GroupHistoryComponent implements OnInit {
  animationState: string;
  currentTabChat: boolean;
  ChatDatevar = new Date(0);
  USerName = 'Cevin';
  GroupHistory = false;
  GroupChat = true;
  // payment: groupPaymentType [];

  ngOnInit(): void {
    console.log(this.Chats);
    console.log(this.Payments);
    var scrollclass = document.getElementById('scrollBlock');
    if (scrollclass != null) {
      scrollclass.scrollTop = scrollclass.scrollHeight;
    }
    let myscrollElement = document.getElementById('scrollBlock') as any;
    const target = myscrollElement?.scrollHeight;
    let currentScrollPos = 0;
    const intervalId = setInterval(() => {
      currentScrollPos = currentScrollPos + 10;

      myscrollElement.scrollTo(0, currentScrollPos);

      if (currentScrollPos >= target) {
        clearInterval(intervalId);
      }
    }, 20);
    //Media Query
    let query = window.matchMedia('(min-width: 900px');
    if (query.matches) {
      this.GroupHistory = false;
      this.GroupChat = false;
    } else {
      this.GroupHistory = false;
      this.GroupChat = true;
    } 
    this.apiService.getAllExpense().subscribe((returnData) => {
      console.log(returnData);
    });
    this.apiService.getAllGroupsOfUser(6).subscribe(data => {
       console.log(data);
    })
  }

  constructor(
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.animationState = '';
    this.currentTabChat = false;
    // this.payment = [];
    // this.route.params.subscribe((params) => { //////////////////////////////////////
    //   console.log(params);
    // });
  }

  Payments: { payerName: string; amount: number }[] = [
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Moritz', amount: -9999 },
    { payerName: 'Moayad', amount: 9999 },
    { payerName: 'Davit', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
    { payerName: 'Hendrik', amount: 9999 },
  ];

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
      this.apiService.createExpense(); //////////////////////
    });
  }

  editPayment() {/////////////////////////////////////////////
    this.apiService.editExpenseById(1);
  }

  deletePayment() {/////////////////////////////////////////////
    this.apiService.deleteExpenseById(1);
  }

  public isactive(Absender: string) {
    if (Absender === this.USerName) {
      return true;
    } else {
      return false;
    }
  }

  public openDialogChatChange(i: number) {
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

  public checkDate(datecheck: Date) {
    /* console.log(datecheck); */
    /* console.log(this.CheckDatevar); */
    /* console.log(datecheck.getDate()) */
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

  returnChatHistory() {
    return this.GroupChat;
  }

  returnGroupHistory() {
    return this.GroupHistory;
  }

  GroupChatButton() {
    this.GroupChat = false;
    this.GroupHistory = true;
  }

  GroupHistoryButton() {
    this.GroupHistory = false;
    this.GroupChat = true;
  }

  public delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async SwipeLeft() {
    if (!this.currentTabChat) {
      this.startAnimation('slideOutLeft');
      await this.delay(400);
      this.GroupChatButton();
      this.currentTabChat = true;
    }
  }

  public async SwipeRight() {
    if (this.currentTabChat) {
      this.startAnimation('slideOutRight');
      await this.delay(400);
      this.GroupHistoryButton();
      this.currentTabChat = false;
    }
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
  closeBill() {
    // alles auf null setzen
    this.router.navigate(['/', 'zahlungen']);
  }

}
