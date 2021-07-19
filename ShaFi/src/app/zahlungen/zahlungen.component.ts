import { ProposeShareDialogComponent } from './../propose-share-dialog/propose-share-dialog.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import {ApiService} from '../services/api.service';
import * as kf from './keyframes';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';

export interface paymentType {
  type: string,
  name: string,
  amount: number,
  endDate: string,
  startDate: string,
  inOrOut: string,
  proposeType: number,
  debtId: number,
  proportion: number,
  shareName: string,
}

@Component({
  selector: 'app-zahlungen',
  templateUrl: './zahlungen.component.html',
  styleUrls: ['./zahlungen.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(700, keyframes(kf.slideOutLeft))),
      transition(
        '* => slideOutRight',
        animate(700, keyframes(kf.slideOutRight))
      ),
    ]),
  ]
})

export class ZahlungenComponent implements OnInit {

  constructor(private api: ApiService, private matDialog: MatDialog) {
    this.currentId = "faelligId";
    this.animationState = '';
   }

  displayedPayments: paymentType[] = [];
  mobile = false;
  innerWidth: any;
  currentId: string;
  animationState: string;
  
  today = new Date();
  

  faellig = false;
  einzahlung = true;
  auszahlung = true;


  ngOnInit(): void {
    const userName = sessionStorage.getItem("username");
    this.api.getAllDebtsForUser().subscribe(data => {
      console.log(data);
      for(let i=0; i < data.length; i++) {
        const paymentObject: paymentType = 
        {type: "open",
         name: "", 
         amount: data[i].amount, 
         endDate: "",
         startDate: "", 
         inOrOut: "", 
         proposeType: 0, 
         debtId: data[i].id, 
         proportion: data[i].shareProportion,
         shareName: data[i].selectedShare.name};
        const deadline = data[i].deadline.split("T")[0].split("-");
        const creation = data[i].creation.split("T")[0].split("-");
        paymentObject.endDate = deadline[2] + "." + deadline[1] + "." + deadline[0];
        paymentObject.startDate = creation[2] + "." + creation[1] + "." + creation[0];


        if(data[i].creditorUsername === userName) {
          paymentObject.name = data[i].debtorUsername;
          paymentObject.inOrOut = "+";
          paymentObject.proposeType = 0;
        }
        else {
          paymentObject.name = data[i].creditorUsername;
          paymentObject.inOrOut = "-";
          paymentObject.proposeType = 1;
        }
        if(data[i].debtorConfirmed === true || data[i].creditorConfirmed === true) {
          paymentObject.proposeType = 2;
        }
        if(this.today > new Date(deadline[1] + " " + deadline[2] + " " + deadline[0])) {
          paymentObject.type = "due";
        } 
        else {
          if(data[i].creditorUsername === userName && data[i].creditorConfirmed === true) {
            paymentObject.type = "deposit";
          }
          else if(data[i].debtorUsername === userName && data[i].debtorConfirmed === true) {
            paymentObject.type = "payment";
          }
        }        
        this.displayedPayments.push(paymentObject);
      }
      console.log(this.displayedPayments)
    });
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 700) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 700) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
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

  public delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


  public onProposeShare(event: Event): void {
    const elementId: string = (event.target as Element).id;
    const buttonNumber: number = parseInt(elementId.split('-')[1]);
    const dialogRef = this.matDialog.open(ProposeShareDialogComponent, {
      data: {
        debtId: buttonNumber
      },
      width: '30vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  public onAcceptShare(event: Event): void {
    const elementId: string = (event.target as Element).id;
    const buttonNumber: number = parseInt(elementId.split('-')[1]);
    console.log(buttonNumber)
    this.api.acceptShare(buttonNumber).subscribe(() => {
      window.location.reload();
    });
  }

  public changeTab(tabId: string): string {
    let animationType = "slideOutLeft";

    if(this.faellig == false) {
      animationType = "slideOutLeft";
    }
    else if(this.auszahlung == false) {
      animationType = "slideOutRight";
    }
    

    if(tabId == "faelligId") {
      this.faellig = false;
      this.einzahlung = true;
      this.auszahlung = true;
      animationType = "slideOutRight";
    } 
    else if(tabId == "einzahlungId") {
      this.faellig = true;
      this.einzahlung = false;
      this.auszahlung = true;
    }
    else if(tabId == "auszahlungId") {
      this.faellig = true;
      this.einzahlung = true;
      this.auszahlung = false;
      animationType = "slideOutLeft";
    }
    return animationType;
  }

  public async Swipe(elementId: string): Promise<void> {
    if(elementId != this.currentId) {
      const animationType = this.changeTab(elementId);
      this.startAnimation(animationType);
      await this.delay(400);
      this.currentId = elementId;
    }
  }
  returnFaellig(): boolean {
    return this.faellig;
  }
  returnEinzahlung(): boolean {
    return this.einzahlung;
  }
  returnAuszahlung(): boolean {
    return this.auszahlung;
  }
}
