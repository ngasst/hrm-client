import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SandboxComponent } from './sandbox.component';
import { TablesComponent, TablesModule } from './table';
import { SandboxRoutingModule } from './sandbox-routing.module';

@NgModule({
  imports: [
    SandboxRoutingModule,
    TablesModule
  ],
  declarations: [
  ]
})
export class SandboxModule { }
