import { Component, HostListener, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

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

@Component({
  selector: 'app-abbrechnung',
  templateUrl: './abbrechnung.component.html',
  styleUrls: ['./abbrechnung.component.css']
})

export class AbbrechnungComponent implements OnInit {

  public FETCHED_DATA: dataType[] = [];
  isLoaded = false;
  mobile = false;
  public innerWidth: any;
  group: string[] = [];
  groupId = 0;
  columns: string[] = ['free', 'Erhalten', 'Bezahlen'];

  constructor(private api: ApiService, private router: Router, private url: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupId = Number(this.url.snapshot.paramMap.get("id"));
    this.api.getCalculatedDebtsForGroup(this.groupId).subscribe(data => {
      this.FETCHED_DATA = data;
      this.isLoaded = true;
      this.group = this.getAllGroupMember();
    })

    this.innerWidth = window.innerWidth;
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
    for(let i=0; i < this.FETCHED_DATA.length; i++) {
      if(this.FETCHED_DATA[i].creditor === member) {
        newDisplayedColumns.push(this.FETCHED_DATA[i].debitor);
      }
      else if(this.FETCHED_DATA[i].debitor === member) {
        newDisplayedColumns.push(this.FETCHED_DATA[i].creditor);
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
  }

  isActive(){
    
    return this.mobile;
  }

  isExpanded(member:String) {
    return true;
  }

  getData(member:string) {
    let displayedData: PeriodicElement[] = [];
    for(let i=0; i < this.FETCHED_DATA.length; i++) {
      let newRow: PeriodicElement = {member: "", erhalten: "", bezahlen:""};
      if(this.FETCHED_DATA[i].creditor === member) {
        newRow.member = this.FETCHED_DATA[i].debitor;
        newRow.erhalten = this.FETCHED_DATA[i].amount;
        displayedData.push(newRow);
      }
      else if(this.FETCHED_DATA[i].debitor === member) {
        newRow.member = this.FETCHED_DATA[i].creditor;
        newRow.bezahlen = this.FETCHED_DATA[i].amount;
        displayedData.push(newRow);
      }
    }
    return displayedData;
  }

  getAllGroupMember() {
    let newDisplayedColumns: string[] = [];
    for(let i=0; i < this.FETCHED_DATA.length; i++) {
      if(!newDisplayedColumns.includes(this.FETCHED_DATA[i].creditor)) {
        newDisplayedColumns.push(this.FETCHED_DATA[i].creditor);
      }
      if(!newDisplayedColumns.includes(this.FETCHED_DATA[i].debitor)) {
        newDisplayedColumns.push(this.FETCHED_DATA[i].debitor);
      }
    }
    return newDisplayedColumns;
  }

  cancelAbrechnung() {
        this.router.navigate(['/', 'group', this.groupId]);
  }

  finalizeAndDelete() {
    this.api.finalizeCalculatedDebts(this.groupId);
    this.api.deleteGroupById(this.groupId);
    this.router.navigate(['/', 'home']);
  }

  finalizeAndMaintain() {
    this.api.finalizeCalculatedDebts(this.groupId);
    this.router.navigate(['/', 'group', this.groupId]);
  }
}

