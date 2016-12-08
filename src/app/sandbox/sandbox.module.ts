import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SandboxComponent } from './sandbox.component';
import { TablesComponent, TablesModule } from './table';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { TableService } from './table/tables.service';

@NgModule({
  imports: [
    SandboxRoutingModule,
    TablesModule
  ],
  declarations: [
    
  ],
  providers: [TableService]
})
export class SandboxModule { }
