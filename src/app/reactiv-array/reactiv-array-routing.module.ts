import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivArrayComponent } from './reactiv-array.component';

const routes: Routes = [{ path: '', component: ReactivArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivArrayRoutingModule { }
