import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';
import { Router } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { stringify } from '@angular/compiler/src/util';
import { DeleteGroupDialogComponent } from '../delete-group-dialog/delete-group-dialog.component';

type groupType = { name: string; id: number; myUsers: number[] };
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
  Groups: { id: number; name: string; myUsers: number[] }[] = [
    {
      id: 1,
      name: 'Shafi',
      myUsers: [2, 3, 4, 5, 6],
    },
    {
      id: 2,
      name: 'Shafi',
      myUsers: [2, 3, 4, 5, 6],
    },
    {
      id: 9,
      name: 'Shafi',
      myUsers: [2, 3, 4, 5, 6],
    },
    {
      id: 7,
      name: 'Shafi',
      myUsers: [2, 3, 4, 5, 6],
    },
  ];

  ngOnInit(): void {
    this.apiService.getAllGroupsOfUser().subscribe((data) => {
      console.log(data);
      /* let Group: { id: number; name: string; myUsers: number[] }[]   */
      

      

      // this.Group.push(id: data[0].id; name: data[0].name; myUsers: data[0].myUsers);
    });
  }
  //Groups: { id: number; name: string; myUsers: number[] }[] = [
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

  // get group from backend
  // getGroup(groupName: string, groupId: string, members: string) {
  //   this.Groups.push({ groupName, groupId, members });
  // }

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

    dialogRef.afterClosed().subscribe(
      result => {
      if (result == null) {
      } else {
        console.log(result);
        let Name =   result.groupName;
        let members = result.members
             /* this.Groups.push({
          name: result.groupName,
          id: result.groupId,
          myUsers: result.members,
          // groupHistory: result.groupHistory //////////////////////
        }); */
        console.log(Name, members)
        this.apiService.createGroup(Name, members).subscribe((result)=>{
          const keys = result.headers.keys();
          console.log(keys);
        });
      }
    });
  }

  // wrong implementation, should search for ids not array indices
  public editGroup(groupId: number, arrayelement: number) {
    console.log(arrayelement);
    console.log(this.Groups[arrayelement].name);
    const dialogref = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: this.Groups[arrayelement].name,
        groupId: this.Groups[arrayelement].id,
        members: this.Groups[arrayelement].myUsers,
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
        this.Groups[arrayelement].name = result.groupName;
        this.Groups[arrayelement].id = result.groupId;
        this.Groups[arrayelement].myUsers = result.members;
        // this.apiService.updateGroupById(groupId);
        console.log(this.Groups);
      }
    });
  }

  deleteGroup(GroupID: number,element:number){

    console.log(this.Groups[element].id);

    const dialogref = this.matDialog.open(DeleteGroupDialogComponent, {
      data: {
        groupName: this.Groups[element].name,
        groupId: this.Groups[element].id,
        members: this.Groups[element].myUsers,
      },
      width: '60vw',
      height: '60vh',
      position: {},
      disableClose: false,
    });
    dialogref.afterClosed().subscribe(() => {
      
      window.location.reload()

    });

  }

  onResized(event: ResizedEvent) {
    this.innerWidth = event.newWidth;
    this.innerHeight = event.newHeight;
  }

  previewGroup(group: groupType) {
    if (this.innerWidth <= 900) {
      this.openGroup(group.id);
    } else this.groupToPreview = group;
  }

  openGroup(id: number) {
    for (let group of this.Groups) {
      if (group.id === id) this.router.navigate(['/', 'group', id]);
      else console.log('Group does not exist'); // hier kann man mehr machen
    }
  }
}
