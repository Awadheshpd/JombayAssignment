import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
