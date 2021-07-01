import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahlungsblockComponent } from './zahlungsblock/zahlungsblock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule }from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ChatprogrammComponent } from './chatprogramm/chatprogramm.component';
import { ChatdialogComponent } from './chatdialog/chatdialog.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import { AddPaymentDialogComponent } from './add-payment-dialog/add-payment-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ZahlungsblockComponent,
    DialogwindowComponent,
    DialogmainexampleComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatprogrammComponent,
    ChatdialogComponent,
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
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
