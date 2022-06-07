import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkListComponent } from './list/work-list.component';
import { WorkRoutingModule } from './work-routing.module';



@NgModule({
  declarations: [
    WorkListComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
