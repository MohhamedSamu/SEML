import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './skeleton/navbar/navbar/navbar.component';
import { IndexComponent } from './skeleton/body/index/index.component';
import { FooterComponent } from './skeleton/footer/footer/footer.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './skeleton/body/login/login.component';
import { RegisterComponent } from './skeleton/body/register/register.component';
import { CalendarComponent } from './skeleton/body/calendar/calendar.component';
import { ContabilidadComponent } from './skeleton/body/contabilidad/contabilidad.component';
import { SalonComponent } from './skeleton/body/salon/salon.component';
import { ExamenComponent } from './skeleton/body/examen/examen.component';
import { ConfiguracionComponent } from './skeleton/body/configuracion/configuracion.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    ContabilidadComponent,
    SalonComponent,
    ExamenComponent,
    ConfiguracionComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
