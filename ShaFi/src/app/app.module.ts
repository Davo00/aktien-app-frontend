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


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ZahlungsblockComponent,
    DialogwindowComponent,
    DialogmainexampleComponent,
    HomeComponent,
    ChatprogrammComponent,
    ChatdialogComponent

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
