import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatientAppComponent } from './PatientApp.component';
import { FormsModule } from '@angular/forms';
import { PatientAppRoutingModule } from './PatientApp-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PatientAppComponent,
  ],
  imports: [
    CommonModule,
    PatientAppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [PatientAppComponent]
})
export class PatientAppModule { }
