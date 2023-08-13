import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from 'src/HomeApp/HomeApp.component';
import { PatientAppComponent } from './PatientApp.component';

const routes: Routes = [
  { path: '', component: HomeAppComponent },
  { path: 'Home', component: HomeAppComponent },
  { path: 'Patient', component: PatientAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PatientAppRoutingModule { }
