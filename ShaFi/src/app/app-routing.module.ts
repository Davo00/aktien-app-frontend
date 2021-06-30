import { ZahlungenComponent } from './zahlungen/zahlungen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { HomeComponent } from './home/home.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { AbbrechnungComponent } from './abbrechnung/abbrechnung.component';

const routes: Routes = [
  {path: 'zahlungen', component: ZahlungenComponent},
  {path: 'group-overview', component: GroupOverviewComponent },
  {path: 'group-history', component: GroupHistoryComponent },
  {path: 'dialogwindow', component: DialogwindowComponent},
  {path: 'dialog', component: DialogmainexampleComponent},
  {path: '', component: HomeComponent},
  {path: 'abrechnung', component: AbbrechnungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ZahlungenComponent, 
                                GroupOverviewComponent, 
                                GroupHistoryComponent, 
                                DialogwindowComponent, 
                                DialogmainexampleComponent, 
                                HomeComponent,
                                AbbrechnungComponent]
