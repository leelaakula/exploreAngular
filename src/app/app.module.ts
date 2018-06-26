import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
