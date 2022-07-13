import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {HeaderComponent} from "../shared/components/header/header.component";
import {TopstripComponent} from "../shared/components/topstrip/topstrip.component";
import {FooterComponent} from "../shared/components/footer/footer.component";
import {NewsletterComponent} from "../shared/components/newsletter/newsletter.component";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    PagesComponent, HomeComponent, HeaderComponent, TopstripComponent, FooterComponent, NewsletterComponent, ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
