import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AckBuilderComponent } from './ack-bluider.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ack-builder', component: AckBuilderComponent }
    ])
  ]
})
export class AckBuilderRoutingModule { }
