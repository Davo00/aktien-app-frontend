import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { ChatdialogComponent } from '../chatdialog/chatdialog.component';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EditPaymentDialogComponent } from '../edit-payment-dialog/edit-payment-dialog.component';

// type expenseType = {
//   amount: number;
//   consumerCount: number;
//   copayerIds: number[];
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
  ChatDatevar = new Date(0);
  GroupHistory = false;
  GroupChat = true;
  credits: any = [];

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
    const myscrollElement = document.getElementById('scrollBlock') as HTMLElement; // any
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
    console.log(this.groupId);
    this.apiService.getCredits(this.groupId).subscribe((returnData: unknown) => {
      this.credits = returnData;
      console.log(this.credits);
      this.credits.forEach((i: any) => {
        console.log(i.username);
      });
    });
  }

  // outdated test data
  // Payments: { userPaid: string; amount: number }[] = [
  //   { userPaid: 'Hendrik', amount: 9999 },
  //   { userPaid: 'Moritz', amount: -9999 },
  //   { userPaid: 'Moayad', amount: 9999 },
  //   { userPaid: 'Davit', amount: 9999 },
  //   { userPaid: 'Hendrik', amount: 9999 },
  // ];

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

  addPayment(): void {
    let addedCredit: any;
    const dialogRef = this.matDialog.open(AddPaymentDialogComponent, {
      data: {
      },
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result != null) {
        addedCredit = {
            userPaid: result.userPaid,
            name: result.reason, // reason
            amount: result.amount,
            description: result.description,
            copayerIds: this.extractCopayers(result.members),
            groupId: this.groupId,
          }
        // this.credits.push({ // push to credits or a new array just for added values?
        //   userPaid: result.userPaid,
        //   name: result.reason, // reason
        //   amount: result.amount,
        //   description: result.description,
        //   copayerIds: this.extractCopayers(result.members),
        //   groupId: this.groupId,
        // });
      }
      // this.apiService.createExpense(); ////////////////////// 
      console.log(this.credits); ////////////////////////////////
      console.log('Expense created'); ////////////////////////////////
    });
  }
  // @NoArgsConstructor
  // public class CreateExpense {
  //     private Long groupId; Y
  //     private String userPaid; Y
  //     private String name; Y
  //     private double amount; Y
  //     private String description; Y
  //     private List<String> copayerNames; Y
  // }

  extractCopayers(members: string): any { // if (members == "") {nix} hat nic gebracht!
    if (members !== null || members !== "") {
      console.log(members);
      const copayers: any[] = [];
      const splitComma = members.split("");
      // console.log(splitComma);
      splitComma.forEach((element) => {
        if (element.includes(' ')) {
          const splitSpace = element.split(" ");
          // console.log(splitSpace);
          splitSpace.forEach((name) => {
            if (name !== "") {
              copayers.push(name);
            }
          });
        } else {
          copayers.push(element);
        }
      });
      console.log(copayers);
      return copayers;
    }
  }

  editPayment(expenseId: number): void {
    const dialogRef = this.matDialog.open(EditPaymentDialogComponent, {
      data: {},
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.credits.push({ // delete element with the id and add a new one?
          userPaid: result.userPaid,
          name: result.reason, // reason
          amount: result.amount,
          description: result.description,
          copayerIds: this.extractCopayers(result.members),
          groupId: this.groupId,
        });
      }
      this.apiService.editExpenseById(expenseId);
      console.log('Expense edited'); ////////////////////////////////
    });
  }

  deletePayment(expenseId: number): void {
    this.apiService.deleteExpenseById(expenseId);
    console.log('Expense deleted');
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

  public checkDate(datecheck: Date): boolean {
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
}
