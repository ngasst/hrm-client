import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SandboxComponent } from './sandbox.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'sandbox', component: SandboxComponent }
    ])
  ]
})
export class SandboxRoutingModule { }
