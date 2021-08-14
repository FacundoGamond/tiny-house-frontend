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
import { ShowroomComponent } from './components/showroom/showroom.component';
import { SustentabilityComponent } from './components/sustentability/sustentability.component';
import { TransportComponent } from './components/transport/transport.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { BuildingComponent } from './components/building/building.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { SustentabilitySliderComponent } from './components/sustentability-slider/sustentability-slider.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { GalleryRendersComponent } from './components/gallery-renders/gallery-renders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreHeaderComponent,
    HeroComponent,
    HouseComponent,
    GalleryComponent,
    InvestmentComponent,
    ShowroomComponent,
    SustentabilityComponent,
    TransportComponent,
    EquipmentComponent,
    BuildingComponent,
    BannerComponent,
    AboutUsComponent,
    ContactComponent,
    SustentabilitySliderComponent,
    WhatsappComponent,
    GalleryRendersComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
