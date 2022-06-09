import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SiteRoutingModule } from './site-routing.module';
import { HeaderComponent } from './layout/partials/header/header.component';
import { FooterComponent } from './layout/partials/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SiteComponent } from './site.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SiteComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    NzFormModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
