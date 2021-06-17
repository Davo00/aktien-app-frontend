import { Component, OnInit } from '@angular/core';
var that:any = this;
@Component({
  selector: 'app-chatprogramm',
  templateUrl: './chatprogramm.component.html',
  styleUrls: ['./chatprogramm.component.css']
})


export class ChatprogrammComponent implements OnInit {

  Chats:{ Absender: string; Datum:Date; text: string; }[]  = [

    {"Absender": "Peter", "Datum": new Date(5000000000), "text": "Einkauf von Bier" },
    {"Absender": "Ullo", "Datum":new Date(50000000000), "text": "Einkauf von Bier" },
    {"Absender": "Cevin", "Datum":new Date(500000000000), "text": "Einkauf von Bier für die Party die wir am letzten Sonntag gefeiert haben" },
    {"Absender": "Carolina", "Datum":new Date(500000000000), "text": "Einkauf von Bier" },
    {"Absender": "Sabine", "Datum":new Date(), "text": "Einkauf von Bier" }, 
    {"Absender": "Cevin", "Datum":new Date(), "text": "Einkauf von Bier" }, 
    /* {"name": "Gruppe1", "mitglieder": "Harald, Sabine, Peter"}, */
];

ChatDatevar = new Date(0);
USerName = "Cevin";

  constructor() { }

  ngOnInit(): void {
    console.log(this.Chats)
    var scrollclass = document.getElementById("scrollBlock");
    console.log("läuft")
    if(scrollclass !=null){
      
    scrollclass.scrollTop = scrollclass.scrollHeight;
    }
  }

  isactive(Absender: string){
    if(Absender === this.USerName){
      return true;
    }else{
      return false;
    }
  }




  checkDate(datecheck: Date) {
    
  /*   console.log(datecheck); */
    /* console.log(this.CheckDatevar); */
/*     console.log(datecheck.getDate()) */
    /* console.log(this.ChatDatevar) */
    /* console.log(this.ChatDatevar) */
    if(datecheck.getDate() == this.ChatDatevar.getDate() && datecheck.getMonth() +1  == this.ChatDatevar.getMonth()+1 && datecheck.getFullYear() == this.ChatDatevar.getFullYear()){

      
      this.ChatDatevar = datecheck;
      
      return false;
    }else{
      this.ChatDatevar = datecheck;
      return true
    }
    
  }

}
