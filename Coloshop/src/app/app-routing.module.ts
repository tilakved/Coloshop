import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./shared/components/login/login.component";
import {DashboardComponent} from "./shared/admin/dashboard/dashboard.component";
import {AuthGuard} from "./core/services/helper/auth/auth.guard";
import {EditDetailsComponent} from "./shared/admin/edit-details/edit-details.component";

const routes: Routes = [
  {path: '' , loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)},
  {path:'login' ,component: LoginComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'edit', component: EditDetailsComponent}

]
  // , canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
