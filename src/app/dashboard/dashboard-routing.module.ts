import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ProviderComponent } from './../dashboard/provider/provider.component';
import { PostListComponent } from './post/post-list.component';
import { PostComponent } from './../dashboard/post/post/post.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'social-account', component: ProviderComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'post/:id', component: PostComponent },
      
      // { path: 'components', loadChildren: '../components/components.module#ComponentsModule' },
      // { path: 'forms', loadChildren: '../forms/forms.module#FormsLocalModule' },
      // { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
      // { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
      // { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
      // { path: 'editors', loadChildren: '../editors/editors.module#EditorsModule' },
      // { path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
