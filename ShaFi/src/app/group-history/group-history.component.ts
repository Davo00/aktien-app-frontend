import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { ChatdialogComponent } from '../chatdialog/chatdialog.component';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DeleteGroupDialogComponent } from '../delete-group-dialog/delete-group-dialog.component';

// type expenseType = {
//   amount: number;
//   consumerCount: number;
//   copayerNames: number[];
//   description: string;
//   groupId: number;
//   id: number;
//   name: string; // reason
//   unpaid: boolean;
//   userPaid: string;
// };

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
      ),
    ]),
  ],
})
export class GroupHistoryComponent implements OnInit {
  groupId: any;
  userName = sessionStorage.getItem('username');
  animationState: string;
  currentTabChat: boolean;
  ChatDatevar = 'null';
  GroupHistory = false;
  GroupChat = true;
  credits: any = [];
  chatContent: any = [];
  currentDate = '';

  constructor(
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.animationState = '';
    this.currentTabChat = false;
    this.credits = [];
    this.groupId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // console.log(this.Chats);
    // console.log(this.Payments);
    const scrollclass = document.getElementById('scrollBlock');
    if (scrollclass != null) {
      scrollclass.scrollTop = scrollclass.scrollHeight;
    }
    const myscrollElement = document.getElementById(
      'scrollBlock'
    ) as HTMLElement; // any
    const target = myscrollElement?.scrollHeight;
    let currentScrollPos = 0;
    const intervalId = setInterval(() => {
      currentScrollPos = currentScrollPos + 10;

      myscrollElement.scrollTo(0, currentScrollPos);

      if (currentScrollPos >= target) {
        clearInterval(intervalId);
      }
    }, 20);
    const query = window.matchMedia('(min-width: 900px');
    if (query.matches) {
      this.GroupHistory = false;
      this.GroupChat = false;
    } else {
      this.GroupHistory = false;
      this.GroupChat = true;
    }
    //console.log(this.groupId);
    this.apiService
      .getCredits(this.groupId)
      .subscribe((returnData: unknown) => {
        this.credits = returnData;
        //console.log(this.credits);
        this.credits.forEach((i: any) => {
          //console.log(i.username);
        });
      });

    // IF NO EXPENSES DO NOTHING
    this.apiService.getSpecificExpense(this.groupId).subscribe((resp: any) => {
      //console.log(resp);
      let d = 0;
      this.chatContent = resp.body;
      for (const element of resp.body) {
        const string = this.arraylist(element.copayerNames);
        this.chatContent[d].copayerNames = string;
        d++;
      }
      //console.log(this.chatContent);
    });
  }

  public arraylist(userlist: any): string {
    let all = '';
    let i = 1;

    if (userlist !== null) {
      for (const member of userlist) {
        if (userlist.length !== i) {
          all = all + member + ', ';
        } else {
          all = all + member;
        }
        i++;
      }

      return all;
    } else {
      return '';
    }
  }

  addPayment(): void {
    const dialogRef = this.matDialog.open(AddPaymentDialogComponent, {
      data: {},
      width: '35vw',
      height: '55vh',
      position: {},
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        const addedCredit: any = {
          userPaid: result.userPaid,
          name: result.reason, // reason
          amount: result.amount,
          description: result.description,
          copayerNames: this.extractCopayers(result.members),
          groupId: this.groupId,
        };
        this.credits.push({
          username: addedCredit.userPaid,
          credit: addedCredit.amount,
        });
        this.apiService.createExpense(addedCredit).subscribe((result) => {
          console.log(result);
          const keys = result.headers.keys();
          // console.log(keys);
          console.log('Expense created');
        });
        window.location.reload();
      }
    });
  }

  extractCopayers(members: string): any {
    if (members !== null || members !== '') {
      //console.log(members);
      const copayers: any[] = [];
      const splitComma = members.split(',');
      // //console.log(splitComma);
      splitComma.forEach((element) => {
        if (element.includes(' ')) {
          const splitSpace = element.split(' ');
          // //console.log(splitSpace);
          splitSpace.forEach((name) => {
            if (name !== '') {
              copayers.push(name);
            }
          });
        } else {
          copayers.push(element);
        }
      });
      //console.log(copayers);
      return copayers;
    }
  }

  deletePayment(expenseId: number): void {
    this.apiService.deleteExpenseById(expenseId);
    //console.log('Expense deleted');
  }

  public isactive(Absender: string): boolean {
    if (Absender === this.userName) {
      return true;
    } else {
      return false;
    }
  }

  public openDialogChatChange(i: number): void {
    const dialogref = this.matDialog.open(ChatdialogComponent, {
      data: {
        Absender: this.chatContent[i].userPaid,
        Text: this.chatContent[i].name,
        Value: this.chatContent[i].amount,
        Mitglieder: this.chatContent[i].copayerNames,
        ID: this.chatContent[i].id,
      },
      width: '300px',
      height: '400px',
      position: {},
      disableClose: false,
    });

    dialogref.afterClosed().subscribe((result) => {
      if (result === null) {
        //
      } else if (result != null && result.delete === false) {
        //console.log(result, 'Änderung');
        this.chatContent[i].name = result.Text;
        const memebrs = this.extractCopayers(result.Mitglieder);
        this.chatContent[i].copayerNames = memebrs;
        this.chatContent[i].amount = result.Value;
        //this.chatContent[i].unpaid = true
        //console.log(this.chatContent[i]);
        this.apiService.editExpenseById(
          this.chatContent[i].id,
          this.chatContent[i]
        );
        //console.log(this.chatContent);
        window.location.reload();
      } else {
        //console.log('DELETE');
        const dialogref = this.matDialog.open(DeleteGroupDialogComponent, {
          data: {
            groupId: this.chatContent[i].id,
            memberstring: this.chatContent[i].userPaid,
            type: 'expense',
            amount: this.chatContent[i].amount,
          },
          width: '250px',
          height: '200px',
          position: {},
          disableClose: false,
        });

        dialogref.afterClosed().subscribe((resultdelete) => {
          if (resultdelete) {
            //console.log('läuft');
            this.apiService
              .deleteExpenseById(this.chatContent[i].id)
              .subscribe((resp: any) => {
                //console.log(resp);
                window.location.reload();
              });
          }
        });
      }
    });
  }

  public checkDate(datecheck: string): boolean {
    const date = this.getDate(datecheck);
    //console.log(date === this.ChatDatevar);
    if (date === this.ChatDatevar) {
      return false;
    } else {
      this.ChatDatevar = date;
      return true;
    }
  }

  returnChatHistory(): boolean {
    return this.GroupChat;
  }

  returnGroupHistory(): boolean {
    return this.GroupHistory;
  }

  GroupChatButton(): void {
    this.GroupChat = false;
    this.GroupHistory = true;
  }

  GroupHistoryButton(): void {
    this.GroupHistory = false;
    this.GroupChat = true;
  }

  public delay(ms: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async SwipeLeft(): Promise<void> {
    if (!this.currentTabChat) {
      this.startAnimation('slideOutLeft');
      await this.delay(400);
      this.GroupChatButton();
      this.currentTabChat = true;
    }
  }

  public async SwipeRight(): Promise<void> {
    if (this.currentTabChat) {
      this.startAnimation('slideOutRight');
      await this.delay(400);
      this.GroupHistoryButton();
      this.currentTabChat = false;
    }
  }

  startAnimation(state: string): void {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(): void {
    this.animationState = '';
  }

  closeBill(): void {
    this.credits = null; ///////////////////////////////////////////
    this.router.navigate(['/', 'abrechnung', this.groupId]);
  }

  public getDate(date: string): string {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = date.substr(8, 2);
    const currentdate = day + '.' + month + '.' + year;
    //console.log(currentdate)

    return currentdate;
  }

  public getHours(hours: string): string {
    const houramndMin = hours.substr(11, 5);
    return houramndMin;
  }
  public checkDates(i: number): boolean {
    const currentDate = this.getDate(this.chatContent[i].created);
    let oldDate = '';
    if (i !== 0) {
      oldDate = this.getDate(this.chatContent[i - 1].created);
    }
    //console.log(currentDate);
    if (i === 0) {
      this.currentDate = currentDate;
      return true;
    } else if (currentDate === oldDate) return false;
    else {
      this.currentDate = currentDate;
      return true;
    }
  }
  setnewDate(): boolean {
    //console.log(this.ChatDatevar, this.currentDate);
    this.ChatDatevar = this.currentDate;
    return false;
  }
}
