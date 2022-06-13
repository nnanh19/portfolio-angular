import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkListComponent } from './list/work-list.component';
import { WorkRoutingModule } from './work-routing.module';
import { SiteWorkDetailComponent } from './work-detail/work-detail.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    WorkListComponent,
    SiteWorkDetailComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    NzImageModule,
    NgxPaginationModule
  ]
})
export class WorkSiteModule { }
