import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
//import { AppComponent } from './app.component';
import { Tut2Component } from './tut2/tut2.component';
import { Tut3Component } from './tut3/tut3.component';

import { VehiclesComponent } from './pal/vehicles/vehicles.component';
import { LoginComponent } from './pal/login/login.component';
import { HomeComponent } from './pal/home/home.component';

import { Form1Component } from './pal/form1/form1.component';
import { Form2reactiveComponent } from './pal/form2reactive/form2reactive.component';
import { ColorsComponent } from './dyn/colors/colors.component';
import { StudentsComponent } from './dyn/students/students.component';

import { StudComponent, StudComponent2 } from './stud/stud.component';

const routes: Routes = [
	//{ path: '', component:AppComponent },
	//{ path: '', redirectTo:"/", pathMatch:'prefix' },
	{ path: '', redirectTo:"/", pathMatch:'full' },

	{ path: 'dep2', component:Tut2Component },
	{ path: 'dep3', component:Tut3Component },
	{ path: 'dep3/:id', component:Tut3Component },

	{ path: 'studs', component:StudComponent },
	{ path: 'studs/:id', component:StudComponent2 },
	{ path: 'basics', component:BasicsComponent },

	//{ path: 'pal', component:VehiclesComponent },
	{ path: 'pal', component:HomeComponent },
	{ path: 'pal/login', component:LoginComponent },

	{ path: 'pal/form1', component:Form1Component },
	{ path: 'pal/form2', component:Form2reactiveComponent },
	{ path: 'dyn/col1', component:ColorsComponent },
	{ path: 'dyn/s', component:StudentsComponent },

	{ path: "**", component: Tut2Component }, // page not found 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComps=[
							BasicsComponent,
							Tut2Component,
							Tut3Component
						];
