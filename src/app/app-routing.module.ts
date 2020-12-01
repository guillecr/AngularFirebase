import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibreriaDetailsComponent } from './libreria-details/libreria-details.component';

const routes: Routes = [
  {path:'details/:id',component:LibreriaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
