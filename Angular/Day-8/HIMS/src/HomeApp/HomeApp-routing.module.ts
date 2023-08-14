import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from 'src/HomeApp/HomeApp.component';
import { PatientAppComponent } from 'src/PatientApp/PatientApp.component';

const routes: Routes = [
  { path: '', component: HomeAppComponent },
  { path: 'Home', component: HomeAppComponent },
  {
    path: 'Patient', loadChildren: () => import('../PatientApp/PatientApp.module')
      .then(m => m.PatientAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeAppRoutingModule { }
