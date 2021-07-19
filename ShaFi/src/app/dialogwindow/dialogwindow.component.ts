import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogwindow',
  templateUrl: './dialogwindow.component.html',
  styleUrls: ['./dialogwindow.component.css'],
})
export class DialogwindowComponent {
  Gruppenname = '';
  Mitglieder = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Gruppenname: string;
      Mitglieder: string;
    },
    private matDialogRef: MatDialogRef<DialogwindowComponent>
  ) {}

  public ngOnDestroy(): void {
    //console.log(this.data);
    if (this.data.Gruppenname === null || this.data.Mitglieder === null) {
      this.matDialogRef.close(null);
    } else {
      this.matDialogRef.close(this.data);
    }
  }

  public dialogClose(): void {
    this.matDialogRef.close();
  }

  public dialogSavenewInfo(): void {
    this.data.Gruppenname = this.Gruppenname;
    this.data.Mitglieder = this.Mitglieder;
    this.matDialogRef.close(this.data);
  }
}
