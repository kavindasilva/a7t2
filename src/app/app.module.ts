import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tut2Component } from './tut2/tut2.component';
import { BasicsComponent } from './basics/basics.component';
import { Tut3Component } from './tut3/tut3.component';
import { TutServiceService } from './tut-service.service';


@NgModule({
  declarations: [
    AppComponent,
    Tut2Component,
    BasicsComponent,
    Tut3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TutServiceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
