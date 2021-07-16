import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-group-dialog',
  templateUrl: './delete-group-dialog.component.html',
  styleUrls: ['./delete-group-dialog.component.css'],
})
export class DeleteGroupDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: string;
      members: number[];
      membersStr: string[];
    },
    private matDialogRef: MatDialogRef<DeleteGroupDialogComponent>
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

  public deleteSure(): void {
    //Call zum Löschen

    this.matDialogRef.close();
  }
}
