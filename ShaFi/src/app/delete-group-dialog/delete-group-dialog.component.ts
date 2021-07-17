import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-group-dialog',
  templateUrl: './delete-group-dialog.component.html',
  styleUrls: ['./delete-group-dialog.component.css'],
})

export class DeleteGroupDialogComponent implements OnInit {

    delete  = false
  
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: String;
      groupId: number;
      members: string[];
     

    },
    private matDialogRef: MatDialogRef<DeleteGroupDialogComponent>,
    private apiService: ApiService
  ) {}


  ngOnInit(): void {
  }

  public ngOnDestroy() {
    
   
      this.matDialogRef.close(this.delete);
    
  }

  public dialogClose() {
    this.delete = false    
    this.matDialogRef.close(this.delete);
  }

  public deleteSure(){
    
    
    this.delete = true
    this.matDialogRef.close(this.delete);
  }

  


