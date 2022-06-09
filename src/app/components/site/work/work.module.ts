import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkListComponent } from './list/work-list.component';
import { WorkRoutingModule } from './work-routing.module';
import { WorkDetailComponent } from './work-detail/work-detail.component';



@NgModule({
  declarations: [
    WorkListComponent,
    WorkDetailComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
