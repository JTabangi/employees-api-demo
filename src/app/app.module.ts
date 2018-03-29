import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from './employees.component';
import { PositionsComponent } from './positions.component';
import { PagenotfoundComponent } from './pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    HomeComponent,
    EmployeesComponent,
    PositionsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
