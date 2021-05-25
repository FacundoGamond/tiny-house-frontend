import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HouseComponent } from './components/house/house.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InvestmentComponent } from './components/investment/investment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreHeaderComponent,
    HeroComponent,
    HouseComponent,
    GalleryComponent,
    InvestmentComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
