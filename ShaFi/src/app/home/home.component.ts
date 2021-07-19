import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../services/api.service';

export interface paymentType {
  name: string,
  amount: number,
  inOrOut: string,
  debtId: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(public router: Router,
    private apiService: ApiService) { }
  Groups: any = []
  duePayments: paymentType[] = [];

  public ngOnInit(): void {

    this.apiService.getAllGroupsOfUser().subscribe((data) => {
      this.Groups = data;
      console.log(this.Groups);
    });
    this.apiService.getAllDebtsForUser().subscribe(data => {
      for(let i=0; i < data.length; i++) {
        const deadline = data[i].deadline.split("T")[0].split("-");
        const endDate = deadline[2] + "." + deadline[1] + "." + deadline[0];
        if(this.today > new Date(deadline[1] + " " + deadline[2] + " " + deadline[0])) {
          const paymentObject: paymentType = {name: "", amount: data[i].amount, inOrOut: "", debtId: data[i].id};
      }
    }
  }

  public clickZahlung(){

  }

}
