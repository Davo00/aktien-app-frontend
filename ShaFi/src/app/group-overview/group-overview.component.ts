import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css'],
})
export class GroupOverviewComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.Groups);
  }

  Groups: { groupName: string; members: string }[] = [
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
  ];

  addGroup() {
    const dialogRef = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: null,
        members: null,
      },
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        console.log(result);
        this.Groups.push({
          groupName: result.groupName,
          members: result.members,
        });
      }
    });
  }

  editGroup(number: number) {
    const dialogref = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: this.Groups[number].groupName,
        members: this.Groups[number].members,
      },
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogref.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        console.log(result);
        this.Groups[number].groupName = result.groupName;
        this.Groups[number].members = result.members;
      }
    });
  }
}
