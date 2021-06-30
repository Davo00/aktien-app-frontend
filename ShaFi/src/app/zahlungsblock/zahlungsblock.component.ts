import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zahlungsblock',
  templateUrl: './zahlungsblock.component.html',
  styleUrls: ['./zahlungsblock.component.css']
})
export class ZahlungsblockComponent implements OnInit {

  @Input() zahlung: any 

  constructor() { }

  ngOnInit(): void {
  }
}
