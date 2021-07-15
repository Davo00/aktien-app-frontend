import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css'],
})
export class AddGroupDialogComponent {
  groupName = '';
  members: number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: string;
      members: number[];
      membersStr: string[];
    },
    private matDialogRef: MatDialogRef<AddGroupDialogComponent>
  ) {}

  public ngOnDestroy(): void {
    console.log(this.data);
    if (this.data.groupName === '' || this.data.members === null) {
      console.log('if');
      this.matDialogRef.close(null);
    } else {
      console.log('else');
      this.matDialogRef.close(this.data);
    }
  }

  public dialogClose(): void {
    this.matDialogRef.close();
  }

  public arraylist(): string {
    let all = '';
    let i = 1;
    if (this.data.members !== null) {
      for (const member of this.data.members) {
        if (this.data.members.length !== i) {
          all = all + member + ', ';
        } else {
          all = all + member;
        }
        i++;
      }
      return all;
    } else {
      return '';
    }
  }

  public dialogSave(groupname: string, member: string):void {
    const memberArray = member.split(',');
    console.log(memberArray);
    const memberIntArray = memberArray.map(Number);
    console.log(memberIntArray);

    this.data.groupName = groupname;
    this.data.members = memberIntArray;

    this.matDialogRef.close();
    
  }
}
