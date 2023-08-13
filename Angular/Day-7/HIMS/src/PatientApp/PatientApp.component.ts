import { Component } from '@angular/core';
import { Patient } from './PatientApp.model'
@Component({

  templateUrl: './PatientApp.component.html'
})
export class PatientAppComponent {
  PatObj: Patient = new Patient();
  patObjs: Array<Patient> = new Array<Patient>();
  editMode: boolean = false;

  Add() {
    if (this.editMode === false) {
      this.patObjs.push(this.PatObj);
      this.PatObj = new Patient();
    }
  }

  Edit(obj: Patient) {
    if (this.editMode === false) {
      this.PatObj = obj;
      this.editMode = true;
    }
  }
 
  Save() {
    if (this.editMode === true) {
      this.PatObj = new Patient();
      this.editMode=false;
    }
  }

  Delete(obj: Patient) {
    if (this.editMode === false) {
      this.PatObj = obj;
      console.log(this.patObjs.indexOf(obj));
      this.patObjs.splice(this.patObjs.indexOf(obj),1);      
    }
  }
}
