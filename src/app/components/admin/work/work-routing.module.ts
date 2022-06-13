import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { AdminWorkListComponent } from "./list/work-list.component";
import { NewComponent } from "./new/new.component";
import { AdminWorkUpdateComponent } from "./update/update.component";

const routes : Routes = [
    {
        path: '',
        component: AdminWorkListComponent
    },
    {
        path: 'new',
        component: NewComponent
    },
    {
        path: ':id/edit',
        component: AdminWorkUpdateComponent
    },
    {
        path: ':id/detail',
        component: DetailComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminWorkRoutingModule{}