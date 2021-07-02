import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';
import { Router } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';

type groupType = { groupName: string; groupID: string; members: string };

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css'],
})
export class GroupOverviewComponent implements OnInit {
  groupToPreview: any;
  mobileView: boolean;
  innerWidth: number;
  innerHeight: number;

  constructor(private matDialog: MatDialog, private router: Router) {
    this.groupToPreview = null;
    this.mobileView = false;
    this.innerWidth = 0;
    this.innerHeight = 0;
  }

  ngOnInit(): void {
  }

  Groups: { groupName: string; groupID: string; members: string }[] = [
    {
      groupName: 'Test Group 1',
      groupID: '1',
      members: 'Niklas, Alex, Hendrick',
    },
    {
      groupName: 'Test Group 2',
      groupID: '2',
      members: 'Moayad, Moritz, Cevin',
    },
    { groupName: 'Test Group 3', groupID: '3', members: 'Davit, Alex, Niklas' },
    {
      groupName: 'Test Group 4',
      groupID: '4',
      members: 'Hendrick, Davit, Cevin',
    },
    {
      groupName: 'Test Group 5',
      groupID: '5',
      members: 'Moayad, Hendrick, Moritz',
    },
    {
      groupName: 'Test Group 6',
      groupID: '6',
      members: 'Davit, Moritz, Cevin',
    },
    {
      groupName: 'Test Group',
      groupID: '7',
      members: 'Davit, Moayad, Hendrick',
    },
    { groupName: 'Test Group', groupID: '8', members: 'Niklas, Alex, Niklas' },
    {
      groupName: 'Test Group',
      groupID: '9',
      members: 'Hendrick, Moayad, Cevin',
    },
  ];

  addGroup() {
    const dialogRef = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: null,
        groupID: null,
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
          groupID: result.groupID,
          members: result.members,
        });
      }
    });
  }

  editGroup(number: number) {
    const dialogref = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: this.Groups[number].groupName,
        groupID: this.Groups[number].groupID,
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
        this.Groups[number].groupID = result.groupID;
        this.Groups[number].members = result.members;
      }
    });
  }

  onResized(event: ResizedEvent) {
    this.innerWidth = event.newWidth;
    this.innerHeight = event.newHeight;
  }

  previewGroup(group: groupType) {
    if (this.innerWidth <= 900) {
      this.router.navigate(['/', 'group-history']);
    } else this.groupToPreview = group;
  }
}
