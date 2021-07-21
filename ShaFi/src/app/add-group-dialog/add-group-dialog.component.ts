import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css'],
})
export class AddGroupDialogComponent implements OnInit {
  groupName: any;
  members: any;
  groupnameAlt: any;
  membersalt: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: string;
      members: string[];
    },
    private matDialogRef: MatDialogRef<AddGroupDialogComponent>
  ) {}
  public ngOnInit(): void {
    this.groupnameAlt = this.data.groupName;
    this.membersalt = this.data.members;
  }

  public ngOnDestroy(): void {
    if (
      (this.data.groupName === this.groupnameAlt &&
        this.data.members === this.membersalt) ||
      this.data.groupName === null ||
      this.data.groupName === '' ||
      this.data.members === [''] ||
      this.data.members === null
    ) {
      this.matDialogRef.close(null);
    } else {
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

  public dialogSave(groupname: string, member: string): void {
    const memberArray = member.split(', ');
    const memberStringArray = memberArray.map(String);
    this.data.groupName = groupname;
    this.data.members = memberStringArray;
    this.matDialogRef.close();
  }
}
