import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatientAppComponent } from './PatientApp.component';
import { FormsModule } from '@angular/forms';
import { PatientAppRoutingModule } from './PatientApp-routing.module';
import { HomeAppComponent } from '../HomeApp/HomeApp.component';
import {MasterPageComponent} from '../HomeApp/HomeApp-MasterPage.component'


@NgModule({
  declarations: [
    MasterPageComponent,
    PatientAppComponent,
    HomeAppComponent,
    

  ],
  imports: [
    BrowserModule,
    PatientAppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class PatientAppModule { }
