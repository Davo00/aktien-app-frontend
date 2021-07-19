import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private apiService: ApiService) { }
  Groups: any = []
  duePayments: paymentType[] = [];
  today = new Date();

  public ngOnInit(): void {
    this.apiService.getAllGroupsOfUser().subscribe((data) => {
      this.Groups = data;
    });
    const userName = sessionStorage.getItem("username");
    this.apiService.getAllDebtsForUser().subscribe(data => {
      for(let i=0; i < data.length; i++) {
        const deadline = data[i].deadline.split("T")[0].split("-");
        if(this.today > new Date(deadline[1] + " " + deadline[2] + " " + deadline[0])) {
          const paymentObject: paymentType = {name: "", amount: data[i].amount, inOrOut: "", debtId: data[i].id};
          if(data[i].creditorUsername === userName) {
            paymentObject.name = data[i].debtorUsername;
            paymentObject.inOrOut = "+";
          }
          else {
            paymentObject.name = data[i].creditorUsername;
            paymentObject.inOrOut = "-";
          }
          this.duePayments.push(paymentObject);
        }
      }
    });
  }
  public clickZahlung(): void{
    this.router.navigate(['/zahlungen']);
  }
}
