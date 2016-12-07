import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UsageComponent } from './usage.component';
import { UsageRoutingModule } from './usage-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UsageRoutingModule
  ],
  declarations: [
    UsageComponent
  ]
})
export class UsageModule { }
