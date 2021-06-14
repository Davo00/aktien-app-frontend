import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogmainexampleComponent } from './dialogmainexample/dialogmainexample.component';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'dialogwindow', component: DialogwindowComponent},
  {path: 'dialog', component: DialogmainexampleComponent},
  {path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
