import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { Http } from '@angular/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routingComps } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tut2Component } from './tut2/tut2.component';
import { BasicsComponent } from './basics/basics.component';
import { Tut3Component } from './tut3/tut3.component';
import { TutServiceService } from './tut-service.service';
import { StudComponent } from './stud/stud.component';

import { St2Service } from './st2.service';
import { DataService } from './pal/data.service';
import { StudentsService } from './dyn/students.service';

import { VehiclesComponent } from './pal/vehicles/vehicles.component';
import { DriversComponent } from './pal/drivers/drivers.component';
import { LoginComponent } from './pal/login/login.component';
import { AuthService } from './pal/auth.service';
import { HomeComponent } from './pal/home/home.component';
import { Form1Component } from './pal/form1/form1.component';
import { Form2reactiveComponent } from './pal/form2reactive/form2reactive.component';
import { ColorsComponent } from './dyn/colors/colors.component';
import { StudentsComponent } from './dyn/students/students.component';

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
    Form1Component,
    Form2reactiveComponent,
    ColorsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

    NgbModule.forRoot()
  ],
  providers: [
    TutServiceService,
    St2Service,
    DataService,
    AuthService,
    StudentsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
