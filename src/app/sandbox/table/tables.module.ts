import { NgModule } from '@angular/core';
import { TablesComponent, TableHighlightDirective, FieldHighlightDirective } from './index';

@NgModule({
  imports: [
  ],
  declarations: [
    TablesComponent,
    TableHighlightDirective,
    FieldHighlightDirective
  ],
  exports: [
    TablesComponent,
    TableHighlightDirective,
    FieldHighlightDirective
  ]
})
export class TablesModule { }
