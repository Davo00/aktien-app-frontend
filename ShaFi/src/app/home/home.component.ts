import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }
  Groups: { groupName: string; members: string }[] = [
    { groupName: 'Group 1', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    
  ];
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
  }

  public clickZahlung(){

  }

}
