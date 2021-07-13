import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';
import { Router } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

type groupType = { groupName: string; groupId: string; members: string };
// type groupType = { groupName: string; groupId: string; members: string; groupHistory: GroupHistoryComponent };

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

  ngOnInit(): void {
    // this.apiService.getAllGroupsOfUser(1).subscribe(data => {
    //   console.log(data);
    // this.Groups.push(data);
    // })
  }

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.groupToPreview = null;
    this.mobileView = false;
    this.innerWidth = 0;
    this.innerHeight = 0;
  }

  // groupHistory: GroupHistoryComponent
  // Groups: { groupName: string; groupId: string; members: string; groupHistory: GroupHistoryComponent }[] = [
  Groups: { groupName: string; groupId: string; members: string }[] = [
    {
      groupName: 'Test Group 1',
      groupId: '1',
      members: 'Niklas, Alex, Hendrik',
      // groupHistory:
    },
    {
      groupName: 'Test Group 2',
      groupId: '2',
      members: 'Moayad, Moritz, Cevin',
    },
    { groupName: 'Test Group 3', groupId: '3', members: 'Davit, Alex, Niklas' },
    {
      groupName: 'Test Group 4',
      groupId: '4',
      members: 'Hendrik, Davit, Cevin',
    },
    {
      groupName: 'Test Group 5',
      groupId: '5',
      members: 'Moayad, Hendrik, Moritz',
    },
    {
      groupName: 'Test Group 6',
      groupId: '6',
      members: 'Davit, Moritz, Cevin',
    },
    {
      groupName: 'Test Group',
      groupId: '7',
      members: 'Davit, Moayad, Hendrik',
    },
    { groupName: 'Test Group', groupId: '8', members: 'Niklas, Alex, Niklas' },
    {
      groupName: 'Test Group',
      groupId: '9',
      members: 'Hendrik, Moayad, Cevin',
    },
  ];

  addGroup() {
    const dialogRef = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: null,
        groupId: null,
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
          groupId: result.groupId,
          members: result.members,
          // groupHistory: result.groupHistory //////////////////////
        });
        this.apiService.createGroup(result.groupName);
      }
    });
  }

  // wrong implementation, should search for ids not array indices
  public editGroup(groupId: number) {
    const dialogref = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: this.Groups[groupId].groupName,
        groupId: this.Groups[groupId].groupId,
        members: this.Groups[groupId].members,
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
        this.Groups[groupId].groupName = result.groupName;
        this.Groups[groupId].groupId = result.groupId;
        this.Groups[groupId].members = result.members;
        this.apiService.updateGroupById(groupId);
      }
    });
  }

  deleteGroup() {}

  onResized(event: ResizedEvent) {
    this.innerWidth = event.newWidth;
    this.innerHeight = event.newHeight;
  }

  previewGroup(group: groupType) {
    if (this.innerWidth <= 900) {
      this.openGroup(group.groupId);
    } else this.groupToPreview = group;
  }

  openGroup(groupId: string) {
    for (let group of this.Groups) {
      if (group.groupId === groupId)
        this.router.navigate(['/', 'group', groupId]);
      else console.log('Group does not exist'); // hier kann man mehr machen
    }
  }
}
