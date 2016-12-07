import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { TableService } from './tables.service';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    @Input() data;
    @Input() highf;
    @Input() hight;
  constructor(private _ts: TableService) {
    
  }

  ngOnInit() {
    //
  }
}
