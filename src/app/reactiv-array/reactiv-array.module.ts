import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivArrayRoutingModule } from './reactiv-array-routing.module';
import { ReactivArrayComponent } from './reactiv-array.component';


@NgModule({
  declarations: [
    ReactivArrayComponent
  ],
  imports: [
    CommonModule,
    ReactivArrayRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactivArrayModule { }
