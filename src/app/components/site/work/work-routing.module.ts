import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { WorkListComponent } from "./list/work-list.component";
import { SiteWorkDetailComponent } from "./work-detail/work-detail.component";

const routes : Routes = [
    {
        path : '',
        component: WorkListComponent
    },
    {
        path : ':id',
        component: SiteWorkDetailComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class WorkRoutingModule {}