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
import { BuggerPageComponent } from './bugger-page/bugger-page.component';
import { LoaderPageComponent } from './loader-page/loader-page.component';
import { WheelExcavatorPageComponent } from './wheel-excavator-page/wheel-excavator-page.component';
import { HydraulicDrillPageComponent } from './hydraulic-drill-page/hydraulic-drill-page.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

// Bootstrap
import { ModalModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';


const routes = [
  { path: '', component: BuggerPageComponent, pathMatch: 'full' },
  { path: 'mini-bugger', component: BuggerPageComponent },
  { path: 'mini-loader', component: LoaderPageComponent },
  { path: 'wheel-excavator', component: WheelExcavatorPageComponent },
  { path: 'hydraulic-drill', component: HydraulicDrillPageComponent },
  // { path: 'hydraulic-hammer', component: WheelExcavatorPageComponent },
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
    HydraulicDrillPageComponent,
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
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
