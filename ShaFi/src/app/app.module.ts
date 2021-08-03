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
import { MatTableModule } from '@angular/material/table';
import { AbbrechnungComponent } from './abbrechnung/abbrechnung.component';
import { ChatdialogComponent } from './chatdialog/chatdialog.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import { AddPaymentDialogComponent } from './add-payment-dialog/add-payment-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { ErrorSiteComponent } from './error-site/error-site.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { HammertimeDirective } from './hammertime.directive';
import * as Hammer from 'hammerjs';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { AngularResizedEventModule } from 'angular-resize-event';
//import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { ProposeShareDialogComponent } from './propose-share-dialog/propose-share-dialog.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DeleteGroupDialogComponent } from './delete-group-dialog/delete-group-dialog.component';
import { AppService } from './app.service';

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
    HomeComponent,
    AbbrechnungComponent,
    DialogwindowComponent,
    DialogmainexampleComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatdialogComponent,
    GroupHistoryComponent,
    GroupOverviewComponent,
    AddGroupDialogComponent,
    AddPaymentDialogComponent,
    ErrorSiteComponent,
    StartseiteComponent,
    HammertimeDirective,
    ProposeShareDialogComponent,
    DeleteGroupDialogComponent,

    // Observable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularResizedEventModule,
    CommonModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    ApiService,
    AppService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
