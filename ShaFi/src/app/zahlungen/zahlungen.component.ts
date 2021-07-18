import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import {ApiService} from '../services/api.service';
import * as kf from './keyframes';

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

  constructor(private api: ApiService) {
    this.currentId = "faelligId";
    this.animationState = '';
   }

  mobile = false;
  innerWidth: any;
  currentId: string;
  animationState: string;

  faellig = false;
  einzahlung = true;
  auszahlung = true;


  ngOnInit(): void {
    this.api.loginUser({password: "pass", username: "Anonym"}).subscribe(data => {
      console.log(data);
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

  zahlungExample = [ 
    {
    type: "Auszahlung",
    name: "Moritz",
    reason: "Essen gehen",
    amount: "30",
    endDate: "22.06.2021",
    startDate: "01.06.2021"
    },
    {
    type: "Einzahlung",
    name: "Niklas",
    reason: "Spritgeld",
    amount: "10",
    endDate: "25.06.2021",
    startDate: "04.06.2021"
    },
    {
      type: "Einzahlung",
      name: "Cevin",
      reason: "Döner",
      amount: "5",
      endDate: "25.06.2021",
      startDate: "04.06.2021"
      }
  ]

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
