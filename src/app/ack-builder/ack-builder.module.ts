import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AckBuilderComponent } from './ack-bluider.component';
import { AckBuilderRoutingModule } from './ack-builder-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AckBuilderRoutingModule
  ],
  declarations: [
    AckBuilderComponent
  ]
})
export class AckBuilderModule { }
