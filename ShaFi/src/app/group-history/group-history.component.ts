import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { ChatdialogComponent } from '../chatdialog/chatdialog.component';
import { trigger, keyframes, animate, transition, group } from '@angular/animations';
import * as kf from './keyframes';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DeleteGroupDialogComponent } from '../delete-group-dialog/delete-group-dialog.component';
import { AppService } from '../app.service';


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
    private apiService: ApiService,
    private appService:AppService
  ) {
    this.animationState = '';
    this.currentTabChat = false;
    this.credits = [];
    this.groupId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
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
    this.apiService
      .getCredits(this.groupId)
      .subscribe((returnData: unknown) => {
        this.credits = returnData;
        this.credits.forEach(() => {
        //
        });
      });

    this.apiService.getSpecificExpense(this.groupId).subscribe((resp: any) => {
      if (resp !== null) {
        let d = 0;
        this.chatContent = resp.body;
        for (const element of resp.body) {
          const string = this.arraylist(element.copayerNames);
          this.chatContent[d].copayerNames = string;
          d++;
        }
      }
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
      width: '330px',
      height: '650px',
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
          const keys = result.headers.keys();
        });
        window.location.reload();
      }
    });
  }

  extractCopayers(members: string): any {
    if (members !== undefined) {
      const copayers: any[] = [];
      const splitComma = members.split(',');
      splitComma.forEach((element) => {
        if (element.includes(' ')) {
          const splitSpace = element.split(' ');
          splitSpace.forEach((name) => {
            if (name !== '') {
              copayers.push(name);
            }
          });
        } else {
          copayers.push(element);
        }
      });
      return copayers;
    }
  }

  deletePayment(expenseId: number): void {
    this.apiService.deleteExpenseById(expenseId);
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
      width: '330px',
      height: '440px',
      position: {},
      disableClose: false,
    });
    dialogref.afterClosed().subscribe((result) => {
      if (result === null) {
        //
      } else if (result != null && result.delete === false) {
        this.chatContent[i].name = result.Text;
        //const memebrs = this.extractCopayers(result.Mitglieder);
        this.chatContent[i].copayerNames = result.Mitglieder;
        this.chatContent[i].amount = result.Value;
        //this.chatContent[i].unpaid = true
        this.apiService.editExpenseById(
          this.chatContent[i].id,
          this.chatContent[i]
        );
        window.location.reload();
      } else {
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
            this.apiService
              .deleteExpenseById(this.chatContent[i].id)
              .subscribe((resp: any) => {
                window.location.reload();
              });
          }
        });
      }
    });
  }

  public checkDate(datecheck: string): boolean {
    const date = this.getDate(datecheck);
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
    this.credits = null;
    this.router.navigate(['/', 'abrechnung', this.groupId]);
  }

  public getDate(date: string): string {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = date.substr(8, 2);
    const currentdate = day + '.' + month + '.' + year;

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
    this.ChatDatevar = this.currentDate;
    return false;
  }

  download(){
    console.log(this.chatContent)

    let Infos: { name: string; paidby: string; amount: number; copayerNames: string; created: string; description: string }[] = [];

    let date = this.getHours(this.chatContent[0].created);
    let date2 = this.getDate(this.chatContent[0].created)
    let i = 0;
    console.log(date, date2)
    
    for(let chatbox in this.chatContent){
      let copayer = this.chatContent[i].copayerNames.replaceAll(`,`,';')
      Infos.push({
        'name': this.chatContent[i].name, 'paidby': this.chatContent[i].userPaid, 'amount': this.chatContent[i].amount, 'copayerNames': copayer, 'created': date2 +' : '+ date,'description': this.chatContent[i].description
      })
      i++
    }
    console.log(Infos)
let groupname = "";
    this.apiService.updateGroupById(this.groupId, null).subscribe( data =>{
      console.log(data.name)
      groupname = data.name

        })


      this.appService.downloadFile(Infos, 'AllExpenses' + "_" +groupname);
    }
}
