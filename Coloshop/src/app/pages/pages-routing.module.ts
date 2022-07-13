import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'pages/Home',
        pathMatch: 'full'
      },
      {
        path: 'pages/Home',
        component: HomeComponent
      },
      {
        path: 'pages/Contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}

