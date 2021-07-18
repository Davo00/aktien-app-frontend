import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';
import { Router } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DeleteGroupDialogComponent } from '../delete-group-dialog/delete-group-dialog.component';

type groupType = { name: string; id: number; usernames: string[] };
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
  Groups: any = [];

  public ngOnInit(): void {
    this.apiService.getAllGroupsOfUser().subscribe((data) => {
      this.Groups = data;
      console.log(this.Groups);
    });
  }
  //Groups: { id: number; name: string; username: number[] }[] = [
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

  public addGroup() {
    const dialogRef = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: null,
        groupId: null,
        members: null,
      },
      width: '35vw',
      height: '35vh',
      position: {},
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        console.log(result);
        let Name = result.groupName;
        let members = result.members;
        /* this.Groups.push({
          name: result.groupName,
          id: result.groupId,
          username: result.members,
          // groupHistory: result.groupHistory //////////////////////
        }); */

        console.log(Name, members);
        let GroupObject = { name: Name, usernames: members };

        this.apiService.createGroup(GroupObject).subscribe((result) => {
          console.log(result);

          const keys = result.headers.keys();
          console.log(keys);
        });
        window.location.reload();
      }
    });
  }

  public editGroup(groupId: number, arrayelement: number) {
    console.log(arrayelement);
    console.log(this.Groups);
    const dialogref = this.matDialog.open(AddGroupDialogComponent, {
      data: {
        groupName: this.Groups[arrayelement].name,
        groupId: this.Groups[arrayelement].id,
        members: this.Groups[arrayelement].myUsers,
      },
      width: '35vw',
      height: '35vh',
      position: {},
      disableClose: false,
    });
    dialogref.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        console.log(result);
        this.Groups[arrayelement].name = result.groupName;
        this.Groups[arrayelement].id = result.groupId;
        this.Groups[arrayelement].usernames = result.members;

        console.log(this.Groups[arrayelement]);
        this.apiService
          .updateGroupById(groupId, this.Groups[arrayelement])
          .subscribe((data) => console.log(data));

        console.log(this.Groups);
        window.location.reload();
      }
    });
  }

  deleteGroup(GroupID: number, element: number) {
    console.log(this.Groups[element].id);

    const dialogref = this.matDialog.open(DeleteGroupDialogComponent, {
      data: {
        groupName: this.Groups[element].name,
        groupId: this.Groups[element].id,
        members: this.Groups[element].myUsers,
        type: 'group',
      },
      width: '350px',
      height: '250px',
      position: {},
      disableClose: false,
    });

    dialogref.afterClosed().subscribe((resulut) => {
      console.log(resulut);

      if (resulut) {
        let username = sessionStorage.getItem('username');
        console.log(username);
        let deleteGroup = {
          name: this.Groups[element].name,
          usernames: this.Groups[element].myUsers,
          id: this.Groups[element].id,
        };
        let i = 0;
        console.log(deleteGroup);

        for (let element of deleteGroup.usernames) {
          if (element === username) {
            deleteGroup.usernames.splice(i, 1);
          } else {
            deleteGroup.usernames[i] = element;
          }
          i++;
        }

        console.log(deleteGroup);

        this.apiService
          .updateGroupByIdDelete(deleteGroup.id, deleteGroup)
          .subscribe((resp) => console.log(resp));

        window.location.reload();
      }
    });
  }

  public notNull(value: null) {
    if (value === null) {
      return;
    } else {
      return value;
    }
  }

  public onResized(event: ResizedEvent) {
    this.innerWidth = event.newWidth;
    this.innerHeight = event.newHeight;
  }

  public previewGroup(group: groupType) {
    if (this.innerWidth <= 900) {
      this.openGroup(group.id);
    } else this.groupToPreview = group;
  }

  public openGroup(id: number) {
    for (let group of this.Groups) {
      if (group.id === id) this.router.navigate(['/', 'group', id]);
      else console.log('Group does not exist'); // hier kann man mehr machen
    }
  }
}
