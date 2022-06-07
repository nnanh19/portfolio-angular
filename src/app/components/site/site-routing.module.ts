import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";

const routes : Routes = [
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'work',
        loadChildren: () => import('./work/work.module').then( m => m.WorkModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
    },
    {
        path : '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class SiteRoutingModule {}
