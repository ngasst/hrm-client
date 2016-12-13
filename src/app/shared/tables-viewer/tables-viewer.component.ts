import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'tables-viewer',
  templateUrl: './tables-viewer.component.html',
  styleUrls: ['./tables-viewer.component.scss']
})
export class TablesViewerComponent {
    @Input() tables;
    @Input() highf;
    @Input() hight;
    @Output() table = new EventEmitter();
  
  constructor() {
    
  }

  selectTable(tableName: string) {
    this.table.emit(tableName);
  }
}
