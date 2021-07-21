import { ApiService } from './../services/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface shareType {
  name: string,
  price: number,
  shareId: number
}

@Component({
  selector: 'app-propose-share-dialog',
  templateUrl: './propose-share-dialog.component.html',
  styleUrls: ['./propose-share-dialog.component.css']
})
export class ProposeShareDialogComponent implements OnInit {

  displayedShares: shareType[] = [];
  selectedShare= 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {debtId: number}, private api: ApiService, private matDialogRef: MatDialogRef<ProposeShareDialogComponent>) { }

  ngOnInit(): void {
    this.api.getAllShares().subscribe(shareData => {
      for(let i=0; i < shareData.length; i++) {
        const shareObject: shareType = {name: shareData[i].name, price: shareData[i].price, shareId: shareData[i].id};
        this.displayedShares.push(shareObject);
      }
      this.selectedShare = this.displayedShares[0].shareId;
    })
  }

  public getShareName(share: shareType): string{
    return share.name;
  }

  public proposeShare(): void {
    this.api.proposeShare(this.data.debtId, this.selectedShare).subscribe(() => {
    //
    });
    this.matDialogRef.close();
  }

  public onPressCancel(): void {
    this.matDialogRef.close();
  }

}
