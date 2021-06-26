import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahlungsblockComponent } from './zahlungsblock/zahlungsblock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ChatprogrammComponent } from './chatprogramm/chatprogramm.component';
import { ChatdialogComponent } from './chatdialog/chatdialog.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import { AddPaymentDialogComponent } from './add-payment-dialog/add-payment-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HammertimeDirective } from './hammertime.directive';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ZahlungsblockComponent,
    DialogwindowComponent,
    DialogmainexampleComponent,
    HomeComponent,
    ChatprogrammComponent,
    ChatdialogComponent,
    GroupHistoryComponent,
    AddGroupDialogComponent,
    AddPaymentDialogComponent,
    HammertimeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
