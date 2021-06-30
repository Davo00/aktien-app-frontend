import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahlungsblockComponent } from './zahlungsblock/zahlungsblock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule }from '@angular/material/form-field';
 import{ MatInputModule } from '@angular/material/input';
 import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { AbbrechnungComponent } from './abbrechnung/abbrechnung.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ZahlungsblockComponent,
    HomeComponent,
    AbbrechnungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
