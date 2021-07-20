import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-group-dialog',
  templateUrl: './delete-group-dialog.component.html',
  styleUrls: ['./delete-group-dialog.component.css'],
})
export class DeleteGroupDialogComponent {
  delete = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: string;
      groupId: number;
      members: string[];
      memberstring: string;
      type: string;
      amount: number;
    },
    private matDialogRef: MatDialogRef<DeleteGroupDialogComponent>,
    private apiService: ApiService
  ) {}

  public ngOnDestroy(): void {
    this.matDialogRef.close(this.delete);
  }

  public dialogClose(): void {
    this.delete = false;
    this.matDialogRef.close(this.delete);
  }

  public deleteSure(): void {
    this.delete = true;
    this.matDialogRef.close(this.delete);
  }
}
