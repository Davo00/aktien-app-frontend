import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule }from '@angular/material/form-field';
 import{ MatInputModule } from '@angular/material/input';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { HomeComponent } from './home/home.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import { AddPaymentDialogComponent } from './add-payment-dialog/add-payment-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupOverviewComponent,
    DialogwindowComponent,
    DialogmainexampleComponent,
    HomeComponent,
    GroupHistoryComponent,
    AddGroupDialogComponent,
    AddPaymentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
