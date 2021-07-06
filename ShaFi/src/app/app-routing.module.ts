import { ZahlungenComponent } from './zahlungen/zahlungen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatprogrammComponent } from './chatprogramm/chatprogramm.component';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { HomeComponent } from './home/home.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { ErrorSiteComponent } from './error-site/error-site.component';
import { StaticReflector } from '@angular/compiler';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  {path: 'zahlungen', component: ZahlungenComponent},
  { path: 'group-overview', component: GroupOverviewComponent },
  { path: 'group-history', component: GroupHistoryComponent },
  {path: 'dialogwindow', component: DialogwindowComponent},
  {path: 'chat', component: ChatprogrammComponent},
  {path: 'dialog', component: DialogmainexampleComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: StartseiteComponent},





  //Dieser Link muss als letztes in der Zeile stehen
  {path: '**', component: ErrorSiteComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ZahlungenComponent, GroupOverviewComponent, GroupHistoryComponent, DialogwindowComponent, DialogmainexampleComponent, HomeComponent]
