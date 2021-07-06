import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css'],
})
export class GroupOverviewComponent implements OnInit {
  // GroupsOverview = false;
  // GroupPreview = true;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.Groups);

    //Media Query
    // var query = window.matchMedia("(min-width: 900px");
    // if (query.matches) {
    //   this.GroupsOverview = false;
    //   this.GroupPreview = false;
    // } else {
    //   this.GroupsOverview = false;
    //   this.GroupPreview = true;
    // }
  }

  Groups: { groupName: string; members: string }[] = [
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
    { groupName: 'Test Group', members: 'Moayad, Alex, Cevin' },
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

  // preview essential info about a group
  preview() {
    console.log("hello");
  }

  // GroupsOverviewButton(){
  //   this.GroupsOverview = false;
  //   this.GroupPreview = true;
  // }
  // GroupPreviewButton(){
  //   this.GroupPreview = false;
  //   this.GroupsOverview = true;
  // }
  // returnGroupsOverview(){
  //   return this.GroupsOverview;
  // }
  // returnGroupPreview(){
  //   return this.GroupPreview;
  // }
}
