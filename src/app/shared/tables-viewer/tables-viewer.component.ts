import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as tables from '../../actions/tables';
import { SearchObject } from '../../models';
import { Observable } from 'rxjs/Observable';

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
    query$: Observable<SearchObject>;
  
  constructor(private store: Store<fromRoot.State>) {
    this.query$ = this.store.select(fromRoot.getFilterQuery);
    //this.query$.subscribe(s => console.log(s));
  }
  

  selectTable(tableName: string) {
    this.table.emit(tableName);
  }
}
