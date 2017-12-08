import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Carrossel2Component } from './carrossel2/carrossel2.component';




@NgModule({
  declarations: [
    AppComponent,
    Carrossel2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
