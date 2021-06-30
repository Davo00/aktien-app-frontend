import { Component, HostListener, OnInit } from '@angular/core';

export interface PeriodicElement {
  member: string;
  erhalten: number;
  bezahlen: number;
}

const ELEMENT_DATA: object[] = [
  {position: 'Bezahlen', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 'Erhalten', name: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-abbrechnung',
  templateUrl: './abbrechnung.component.html',
  styleUrls: ['./abbrechnung.component.css']
})

export class AbbrechnungComponent implements OnInit {

  mobile: boolean = false;
  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 800) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 800) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  getDisplayedColumns(member: string): string[] {
    let newDisplayedColumns: string[] = [];
    newDisplayedColumns.push('free');
    for(let i=0; i < this.displayedColumns.length; i++) {
      if(this.displayedColumns[i] != member) {
        newDisplayedColumns.push(this.displayedColumns[i]);
      }
    }
    return newDisplayedColumns;
  }
  onClickExpand(event: Event): void {
    let elementId: string = (event.target as Element).id;
    let buttonNumber: string = elementId.split('-')[1];
    let tableId: string = "table-" + buttonNumber;
    console.log(tableId);
    let table = document.getElementById(tableId)!;
    if(table.style.display == "none") {
      table.style.display = "inline";
    }
    else{
      table.style.display = "none";
    }
    //target.style.display = "none";
    //console.log(target);
    //angular.element('#element').css('height', '100px');
  }

  isActive(){
    
    return this.mobile;
  }

  isExpanded(member:String) {
    return true;
  }

  gruppe: string[] = ['Cevin', 'Moritz', 'Hendrik', 'Moayad'];
  mobileColumns: string[] = ['free', 'Erhalten', 'Bezahlen'];
  displayedColumns: string[] = ['Cevin', 'Moritz', 'Hendrik', 'Moayad'];
  dataSource = ELEMENT_DATA;
  dataSource2: PeriodicElement[] = [
    {member: 'Cevin', erhalten: 30, bezahlen: 0},
    {member: 'Moritz', erhalten: 0, bezahlen: 40},
    {member: 'Hendrik', erhalten: 0, bezahlen: 0},
    {member: 'Moayad', erhalten: 0, bezahlen: 20}
  ];
}

