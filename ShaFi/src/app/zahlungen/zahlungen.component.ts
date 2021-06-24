import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahlungen',
  templateUrl: './zahlungen.component.html',
  styleUrls: ['./zahlungen.component.css']
})
export class ZahlungenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
