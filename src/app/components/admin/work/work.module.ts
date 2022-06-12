import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminWorkRoutingModule } from './work-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AdminWorkListComponent } from './list/work-list.component';
import { AdminWorkUpdateComponent } from './update/update.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AdminWorkListComponent,
    AdminWorkUpdateComponent,
    NewComponent  
  ],
  imports: [
    CommonModule,
    AdminWorkRoutingModule,
    NzTableModule,
    NzDropDownModule,
    FormsModule,
    NzIconModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzNotificationModule
  ]
})
export class WorkModule { }
