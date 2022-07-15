import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AgmCoreModule} from "@agm/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {LoginComponent} from "./shared/components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from './shared/admin/dashboard/dashboard.component';
import {AddDollarPipe} from "./core/pipes/custom-pipe";
import {PagesModule} from "./pages/pages.module";
import { AdminHeaderComponent } from './shared/admin/admin-header/admin-header.component';
import { EditDetailsComponent } from './shared/admin/edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, AddDollarPipe, AdminHeaderComponent, EditDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: ''
        }),
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-right'
        }),
        ReactiveFormsModule,
        PagesModule,
        FormsModule
    ],
  providers: [],
  exports: [
    AddDollarPipe
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
