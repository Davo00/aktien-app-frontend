import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupOverviewComponent } from './group-overview/group-overview.component';

const routes: Routes = [{ path: 'group-overview', component: GroupOverviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
