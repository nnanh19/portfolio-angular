import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { WorkListComponent } from "./list/work-list.component";

const routes : Routes = [
    {
        path : '',
        component: WorkListComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class WorkRoutingModule {}