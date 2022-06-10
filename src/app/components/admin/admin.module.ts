import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AdminComponent } from './admin.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    
  ]
})
export class AdminModule { }
