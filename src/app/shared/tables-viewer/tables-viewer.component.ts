import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'tables-viewer',
  templateUrl: './tables-viewer.component.html',
  styleUrls: ['./tables-viewer.component.scss']
})
export class TablesViewerComponent implements OnInit {
    @Input() tables;
    @Input() highf;
    @Input() hight;
  constructor() {
    
  }

  ngOnInit() {
    console.log(this.tables);
  }
}
