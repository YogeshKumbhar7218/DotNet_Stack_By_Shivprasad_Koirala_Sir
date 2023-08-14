import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAppComponent } from './PatientApp.component';

const routes: Routes = [
  { path: 'Add', component: PatientAppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientAppRoutingModule { }
