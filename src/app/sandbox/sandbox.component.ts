import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableService } from './table';
import { Observable, Subject } from 'rxjs/Rx';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';
import { LoadingModalComponent } from '../shared';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as tables from '../actions/tables';
import * as layout from '../actions/layout';
import { Table, SearchObject } from '../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'sandbox',
  styleUrls: [ './sandbox.component.scss' ],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent {  
  query$: Observable<SearchObject>;
  tables$: Observable<Table[]>;
  hField$: Observable<string>;
  hTable$: Observable<string>;

  dialogRef: MdDialogRef<LoadingModalComponent>;
  constructor(private store: Store<fromRoot.State>, private dialog: MdDialog) {
    this.query$ = store.select(fromRoot.getFilterQuery).take(1);
    this.tables$ = store.select(fromRoot.getFilterResults);
    this.hField$ = store.select(fromRoot.getHightlighField);
    this.hTable$ = store.select(fromRoot.getHighlightTable);
  }

  filter(query: SearchObject) {
    this.store.dispatch(new layout.ShowLoadingModal());
    this.store.dispatch(new tables.SearchAction(query));
    this.store.dispatch(new layout.HighlightField(query.fname));
    this.store.dispatch(new layout.HighlightTable(query.tname));
  }

  ngOnInit() {
    this.store.select(fromRoot.getFilterLoading).subscribe(s => {
      console.log(s);
      let dialogOptions: MdDialogConfig = {
        disableClose: true,
        position: {top: '0', bottom: '0', left: '0', right: '0'}
      }
      if (!s && typeof this.dialogRef !== ('undefined' || null)) {
        this.dialogRef.close();
        this.dialogRef = null;
      } else {
        if (s)
          this.dialogRef = this.dialog.open(LoadingModalComponent, dialogOptions);
      }
    });
  }

}
