import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { WorkListComponent } from "./list/work-list.component";
import { WorkDetailComponent } from "./work-detail/work-detail.component";

const routes : Routes = [
    {
        path : '',
        component: WorkListComponent
    },
    {
        path : ':id',
        component: WorkDetailComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class WorkRoutingModule {}