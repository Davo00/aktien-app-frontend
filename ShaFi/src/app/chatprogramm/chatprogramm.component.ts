import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatdialogComponent } from '../chatdialog/chatdialog.component';


@Component({
  selector: 'app-chatprogramm',
  templateUrl: './chatprogramm.component.html',
  styleUrls: ['./chatprogramm.component.css']
})


export class ChatprogrammComponent implements OnInit {

  Chats:{ Absender: string; Datum:Date; Text: string; Value: number }[]  = [

    {"Absender": "Peter", "Datum": new Date(5000000000), "Text": "Einkauf von Bier", "Value": 10 },
    {"Absender": "Ullo", "Datum":new Date(50000000000), "Text": "Einkauf von Bier", "Value": 10 },
    {"Absender": "Cevin", "Datum":new Date(500000000000), "Text": "Einkauf von Bier für die Party die wir am letzten Sonntag gefeiert haben", "Value": 10 },
    {"Absender": "Carolina", "Datum":new Date(500000000000), "Text": "Einkauf von Bier", "Value": 5},
    {"Absender": "Sabine", "Datum":new Date(), "Text": "Einkauf von Bier", "Value": 10 }, 
    {"Absender": "Cevin", "Datum":new Date(), "Text": "Einkauf von Bier", "Value": 10 }, 
    /* {"name": "Gruppe1", "mitglieder": "Harald, Sabine, Peter"}, */
];

ChatDatevar = new Date(0);
USerName = "Cevin";

  constructor(private matDialog: MatDialog) { }

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

  openDialogChatChange(i: number){
    let dialogref = this.matDialog.open(ChatdialogComponent,
      {
        data: {
         Absender: this.Chats[i].Absender,
         Datum:this.Chats[i].Datum,
         Text: this.Chats[i].Text,
         Value: this.Chats[i].Value,
         
          
          


        }, width: "300px",
        height:"300px",
        position: {
         
          
        },
        disableClose: false
      });

      dialogref.afterClosed().subscribe( result => {
        console.log(result)
        this.Chats[i].Text = result.Text;
        this.Chats[i].Value = result.Value;
        /* this.Infos[number].name = result.Gruppenname;
        this.Infos[number].mitglieder = result.Mitglieder; */
        
      })
   
  
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
