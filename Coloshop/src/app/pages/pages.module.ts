import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {HeaderComponent} from "../shared/components/header/header.component";
import {TopstripComponent} from "../shared/components/topstrip/topstrip.component";
import {FooterComponent} from "../shared/components/footer/footer.component";
import {NewsletterComponent} from "../shared/components/newsletter/newsletter.component";
import {ContactComponent} from './contact/contact.component';
import {AgmCoreModule} from "@agm/core";
import {CarouselModule} from 'ngx-owl-carousel-o';
import {LoginComponent} from "../shared/components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {AppModule} from "../app.module";

@NgModule({
    declarations: [
        PagesComponent, HomeComponent, HeaderComponent, TopstripComponent, FooterComponent, NewsletterComponent, ContactComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        AgmCoreModule,
        CommonModule,
        CarouselModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule,
    ]
})
export class PagesModule {
}
