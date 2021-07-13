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
      members: Number[];
    },
    private matDialogRef: MatDialogRef<AddGroupDialogComponent>
  ) {}

  ngOnInit(): void {}


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

  public arraylist(){
    let all = "";
    let i = 1;
    for(let member of this.data.members){
      if(this.data.members.length !== i){
      all = all + member + ", ";
      
      
      }else{
        all = all + member ;
      }
      i++;
    }
    return all
  }

  public dialogSave(groupname: string, member: string){

    let memberArray = member.split(",");
    let memberIntArray = memberArray.map(Number);
    console.log(memberIntArray)


    this.data.groupName  = groupname;
    this.data.members = memberIntArray;
    	
    this.matDialogRef.close();
    //data.groupName = box1.value; data.members = box2.value; dialogClose()
  }
}
