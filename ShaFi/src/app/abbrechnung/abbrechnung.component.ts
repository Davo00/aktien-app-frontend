import { Component, HostListener, OnInit } from '@angular/core';

export interface PeriodicElement {
  member: string;
  erhalten: any;
  bezahlen: any;
}
export interface dataType {
  creditor: string;
  debitor: string;
  amount: number;
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
    this.group = this.getAllGroupMember();
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
    for(let i=0; i < this.DATA_EXAMPLE.length; i++) {
      if(this.DATA_EXAMPLE[i].creditor === member) {
        newDisplayedColumns.push(this.DATA_EXAMPLE[i].debitor);
      }
      else if(this.DATA_EXAMPLE[i].debitor === member) {
        newDisplayedColumns.push(this.DATA_EXAMPLE[i].creditor);
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

  getData(member:string) {
    let displayedData: PeriodicElement[] = [];
    for(let i=0; i < this.DATA_EXAMPLE.length; i++) {
      let newRow: PeriodicElement = {member: "", erhalten: "", bezahlen:""};
      if(this.DATA_EXAMPLE[i].creditor === member) {
        newRow.member = this.DATA_EXAMPLE[i].debitor;
        newRow.erhalten = this.DATA_EXAMPLE[i].amount;
        displayedData.push(newRow);
      }
      else if(this.DATA_EXAMPLE[i].debitor === member) {
        newRow.member = this.DATA_EXAMPLE[i].creditor;
        newRow.bezahlen = this.DATA_EXAMPLE[i].amount;
        displayedData.push(newRow);
      }
    }
    console.log(displayedData);
    return displayedData;
  }

  getAllGroupMember() {
    let newDisplayedColumns: string[] = [];
    for(let i=0; i < this.DATA_EXAMPLE.length; i++) {
      if(!newDisplayedColumns.includes(this.DATA_EXAMPLE[i].creditor)) {
        newDisplayedColumns.push(this.DATA_EXAMPLE[i].creditor);
      }
      if(!newDisplayedColumns.includes(this.DATA_EXAMPLE[i].debitor)) {
        newDisplayedColumns.push(this.DATA_EXAMPLE[i].debitor);
      }
    }
    return newDisplayedColumns;
  }

  DATA_EXAMPLE: dataType[] = [
    {
     creditor: "Hendrik",
     debitor: "Davit",
     amount: 16.13
    },
    {
     creditor: "Ramona",
     debitor: "Moritz",
     amount: 6.6
    },
    {
     creditor: "Cevin",
     debitor: "Davit",
     amount: 4.05
    },
    {
     creditor: "Ramona",
     debitor: "Davit",
     amount: 2.43
    }
   ];

  group: string[] = [];
  columns: string[] = ['free', 'Erhalten', 'Bezahlen'];
  displayedColumns: string[] = ['Cevin', 'Moritz', 'Hendrik', 'Moayad'];
  dataSource = 3;

  dataSource2: PeriodicElement[] = [
    {member: 'Cevin', erhalten: 30, bezahlen: ""},
    {member: 'Moritz', erhalten: "", bezahlen: 40},
    {member: 'Hendrik', erhalten: "", bezahlen: ""},
    {member: 'Moayad', erhalten: "", bezahlen: 20}
  ];
}

