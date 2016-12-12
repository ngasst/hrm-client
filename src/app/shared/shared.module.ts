import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TablesSearcherComponent }   from './tables-searcher';
import { TablesViewerComponent, FieldHighlightDirective, TableHighlightDirective }   from './tables-viewer';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, MaterialModule],
    declarations: [TablesSearcherComponent, TablesViewerComponent, FieldHighlightDirective, TableHighlightDirective],
    exports: [TablesSearcherComponent, TablesViewerComponent, FieldHighlightDirective, TableHighlightDirective],
    providers: []
})
export class SharedModule { }