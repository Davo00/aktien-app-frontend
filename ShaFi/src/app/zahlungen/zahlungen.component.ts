import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
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
      // transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      // transition('* => swing', animate(1000, keyframes(kf.swing))),
      // transition('* => jello', animate(1000, keyframes(kf.jello))),
      // transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      // transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      // transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ]),
  ]
})
export class ZahlungenComponent implements OnInit {

  constructor() {
    this.currentId = "faelligId";
    this.animationState = '';
   }

  mobile: boolean = false;
  public innerWidth: any;
  currentId: String;
  animationState: String;

  faellig = false;
  einzahlung = true;
  auszahlung = true;


  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 800) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 800) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
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

  public delay(ms: number) {
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

  public changeTab(tabId: String): String {
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

  public async Swipe(elementId: String) {
    console.log(elementId);
    if(elementId != this.currentId) {
      let animationType = this.changeTab(elementId);
      this.startAnimation(animationType);
      await this.delay(400);
      this.currentId = elementId;
      console.log(this.currentId);
    }
  }
  returnFaellig() {
    return this.faellig;
  }
  returnEinzahlung() {
    return this.einzahlung;
  }
  returnAuszahlung() {
    return this.auszahlung;
  }

  /*public async SwipeRight() {
    if (this.currentTabChat) {
      this.startAnimation('slideOutRight');
      await this.delay(400);
      this.GroupHistoryButton();
      this.currentTabChat = false;
    }
  }*/

}
