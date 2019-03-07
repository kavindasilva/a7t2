import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { Http } from '@angular/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComps } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tut2Component } from './tut2/tut2.component';
import { BasicsComponent } from './basics/basics.component';
import { Tut3Component } from './tut3/tut3.component';
import { TutServiceService } from './tut-service.service';
import { StudComponent } from './stud/stud.component';

import { St2Service } from './st2.service';
import { DataService } from './pal/data.service';
import { VehiclesComponent } from './pal/vehicles/vehicles.component';
import { DriversComponent } from './pal/drivers/drivers.component';
import { LoginComponent } from './pal/login/login.component';
import { AuthService } from './pal/auth.service';
import { HomeComponent } from './pal/home/home.component';
import { Form1Component } from './pal/form1/form1.component';

@NgModule({
  declarations: [
    AppComponent,
    Tut2Component,
    BasicsComponent,
    Tut3Component,
    StudComponent,
    VehiclesComponent,
    DriversComponent,
    LoginComponent,
    HomeComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    NgbModule.forRoot()
  ],
  providers: [
    TutServiceService,
    St2Service,
    DataService,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
