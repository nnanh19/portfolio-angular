import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./components/site/site.module').then( m => m.SiteModule),
  },
  {
    path : 'admin',
    loadChildren : () => import('./components/admin/admin.module').then( m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
