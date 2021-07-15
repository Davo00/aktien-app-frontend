import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-group-dialog',
  templateUrl: './delete-group-dialog.component.html',
  styleUrls: ['./delete-group-dialog.component.css']
})
export class DeleteGroupDialogComponent implements OnInit {

  
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: String;
      members: Number[];
      membersStr:String[];
    },
    private matDialogRef: MatDialogRef<DeleteGroupDialogComponent>
  ) {}

  ngOnInit(): void {
  }

  public ngOnDestroy() {
    console.log(this.data);
    if (this.data.groupName === "" || this.data.members === null) {
      console.log("if")
      this.matDialogRef.close(null);
    } else {
      console.log("else")
      this.matDialogRef.close(this.data);
    }
  }

  public dialogClose() {
    this.matDialogRef.close();
  }

  public deleteSure(){
    //Call zum Löschen
    
    this.matDialogRef.close();
  }

  public arraylist(){
    let all = "";
    let i = 1;
    if(this.data.members !==null){
    for(let member of this.data.members){
      if(this.data.members.length !== i){
      all = all + member + ", ";
      
      
      }else{
        all = all + member ;
      }
      i++;
      
    }return all
  }else{
    return ""
  }
    
  }

}
