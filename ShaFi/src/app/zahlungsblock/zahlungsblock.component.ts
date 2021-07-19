import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zahlungsblock',
  templateUrl: './zahlungsblock.component.html',
  styleUrls: ['./zahlungsblock.component.css']
})
export class ZahlungsblockComponent implements OnInit {

  @Input() zahlung: any 

  mobile = false;
  innerWidth: any;
  
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <= 700) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }
}
