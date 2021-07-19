import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(public router: Router,
    private apiService: ApiService) { }
  Groups: any = []
  Zahlungen: { amount: number; receiver: string }[] = [
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
    { receiver: 'Moayad', amount: 15},
  ];

  public ngOnInit(): void {

    this.apiService.getAllGroupsOfUser().subscribe((data) => {
      this.Groups = data;
      console.log(this.Groups);
    });
  }

  public clickZahlung(){

  }

}
