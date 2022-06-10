import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminWorkListComponent } from "./list/work-list.component";
import { AdminWorkUpdateComponent } from "./update/update.component";

const routes : Routes = [
    {
        path: '',
        component: AdminWorkListComponent
    },
    {
        path: ':id',
        component: AdminWorkUpdateComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminWorkRoutingModule{}