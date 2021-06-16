import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatprogramm',
  templateUrl: './chatprogramm.component.html',
  styleUrls: ['./chatprogramm.component.css']
})
export class ChatprogrammComponent implements OnInit {

  Chats: { Absender: string; Datum:string; text: string; }[]  = [

    {"Absender": "Peter", "Datum":"2021-01-18", "text": "Einkauf von Bier" },
    {"Absender": "Ullo", "Datum":"2021-01-18", "text": "Einkauf von Bier" },
    {"Absender": "Gabi", "Datum":"2021-01-18", "text": "Einkauf von Bier" },
    {"Absender": "Carolina", "Datum":"2021-01-18", "text": "Einkauf von Bier" },
    {"Absender": "Sabine", "Datum":"2021-01-18", "text": "Einkauf von Bier" },
    /* {"name": "Gruppe1", "mitglieder": "Harald, Sabine, Peter"}, */
    
   
];

  constructor() { }

  ngOnInit(): void {
  }

}
