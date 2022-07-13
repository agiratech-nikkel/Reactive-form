import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'ReactivForm', loadChildren: 
    () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
   }, 
{ 
    path: 'Reactiv-Array', loadChildren:
   () => import('./reactiv-array/reactiv-array.module').then(m => m.ReactivArrayModule) 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
