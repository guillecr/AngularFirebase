import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibreriaListComponent } from './libreria-list/libreria-list.component';
import { LibreriaAddComponent } from './libreria-add/libreria-add.component';

const routes: Routes = [
  {path:'lista',component:LibreriaListComponent},
  {path:'add',component:LibreriaAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
