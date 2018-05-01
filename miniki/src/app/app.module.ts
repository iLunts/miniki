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
import { BuggerComponent } from './home-page/bugger/bugger.component';
import { LoaderComponent } from './home-page/loader/loader.component';
import { WheelComponent } from './home-page/wheel/wheel.component';
// import { GalleryModule } from '@ngx-gallery/core';
import { NgxGalleryModule } from 'ngx-gallery';

const routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
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
    PageNotFoundComponent,
    BuggerComponent,
    LoaderComponent,
    WheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    TabsModule.forRoot(),
    // GalleryModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
