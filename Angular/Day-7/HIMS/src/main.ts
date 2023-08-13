import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PatientAppModule } from './PatientApp/PatientApp.module';


platformBrowserDynamic().bootstrapModule(PatientAppModule)
  .catch(err => console.error(err));
