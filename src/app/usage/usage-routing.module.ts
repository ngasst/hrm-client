import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsageComponent } from './usage.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'usage', component: UsageComponent }
    ])
  ]
})
export class UsageRoutingModule { }
