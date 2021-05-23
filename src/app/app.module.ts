import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HouseComponent } from './components/house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreHeaderComponent,
    HeroComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
