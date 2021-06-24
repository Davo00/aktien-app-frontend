import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css'],
})
export class AddGroupDialogComponent implements OnInit {
  groupName: any;
  members: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: String;
      members: String;
    },
    private matDialogRef: MatDialogRef<AddGroupDialogComponent>
  ) {}

  ngOnInit(): void {}

  dialogSaveGroup() {
    this.data.groupName = this.groupName;
    this.data.members = this.members;
    this.matDialogRef.close(this.data);
  }

  ngOnDestroy() {
    console.log(this.data);
    if (this.data.groupName === null || this.data.members === null) {
      this.matDialogRef.close(null);
    } else {
      this.matDialogRef.close(this.data);
    }
  }

  dialogClose() {
    this.matDialogRef.close();
  }
}
