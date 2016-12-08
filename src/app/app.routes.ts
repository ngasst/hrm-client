import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox';
import { UsageComponent } from './usage';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: SandboxComponent },
  { path: 'sandbox',  component: SandboxComponent },
  { path: 'usage', component: UsageComponent },
  /*{
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },*/
  { path: '**',    component: NoContentComponent },
];
