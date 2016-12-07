import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SandboxComponent } from './sandbox.component';
import { TablesComponent, FieldHighlightDirective, TableHighlightDirective} from './table';
import { SandboxRoutingModule } from './sandbox-routing.module';

@NgModule({
  imports: [
    SandboxRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SandboxComponent,
    TablesComponent,
    TableHighlightDirective,
    FieldHighlightDirective
  ]
})
export class SandboxModule { }
