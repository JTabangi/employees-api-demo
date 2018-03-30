import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { EmployeesComponent } from './employees.component';
import { PositionsComponent } from './positions.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionService } from './data/position.service';
import { EmployeeService } from './data/employee.service'; 
import { HttpClient } from '@angular/common/http/src/client';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    EmployeesComponent,
    PositionsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PositionService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
