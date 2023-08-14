import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeAppComponent } from '../HomeApp/HomeApp.component';
import {MasterPageComponent} from '../HomeApp/HomeApp-MasterPage.component'
import { HomeAppRoutingModule } from './HomeApp-routing.module';


@NgModule({
  declarations: [
    MasterPageComponent,
    HomeAppComponent,
    

  ],
  imports: [
    BrowserModule,
    HomeAppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeAppModule { }
