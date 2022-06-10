import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes : Routes = [
    {
        path : '',
        component: AdminComponent,
        children : [
            {
                path: 'work',
                loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class AdminRoutingModule {}
