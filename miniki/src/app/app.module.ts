import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
// import { GalleryModule } from '@ngx-gallery/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { BuggerPageComponent } from './bugger-page/bugger-page.component';
import { LoaderPageComponent } from './loader-page/loader-page.component';
import { WheelExcavatorPageComponent } from './wheel-excavator-page/wheel-excavator-page.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

const routes = [
  { path: '', component: BuggerPageComponent, pathMatch: 'full' },
  { path: 'mini-bugger', component: BuggerPageComponent },
  { path: 'mini-loader', component: LoaderPageComponent },
  { path: 'wheel-excavator', component: WheelExcavatorPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ServicePageComponent,
    BuggerPageComponent,
    LoaderPageComponent,
    WheelExcavatorPageComponent,
    PageNotFoundComponent,
    TabMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    // GalleryModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
