import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { SiteComponent } from "./site.component";

const routes : Routes = [
    {
        path: '',
        component: SiteComponent,
        children: [
            {
                path: 'home',
                component: HomepageComponent
            },
            {
                path: 'work',
                loadChildren: () => import('./work/work-site.module').then( m => m.WorkSiteModule)
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
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class SiteRoutingModule {}
