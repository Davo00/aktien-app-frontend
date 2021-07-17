import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css'],
})
export class AddGroupDialogComponent implements OnInit{
  groupName: any;
  members: any;
  groupnameAlt: any;
  membersalt: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: String;
      members: string[];
      
    },
    private matDialogRef: MatDialogRef<AddGroupDialogComponent>
  ) {}

  public ngOnInit(){
    this.groupnameAlt= this.data.groupName;
    this.membersalt = this.data.members
  }



  public ngOnDestroy() {
    console.log(this.data);
   // console.log(this.membersalt, this.groupnameAlt);

    if (this.data.groupName === this.groupnameAlt && this.data.members === this.membersalt || this.data.groupName === null || this.data.groupName === "" ||this.data.members === [""] || this.data.members === null) {
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

  public dialogSave(groupname: string, member: string){

    
    

    let memberArray = member.split(", ");
    console.log(memberArray)
    let memberStringArray = memberArray.map(String);
    console.log(memberStringArray)
    

    this.data.groupName  = groupname;
    this.data.members = memberStringArray;
    	
    this.matDialogRef.close();
    //data.groupName = box1.value; data.members = box2.value; dialogClose()
  }
}
