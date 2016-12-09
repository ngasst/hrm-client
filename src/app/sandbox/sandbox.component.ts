import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableService } from './table';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as tables from '../actions/tables';
import { Table, SearchObject } from '../models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'sandbox',
  styleUrls: [ './sandbox.component.scss' ],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent {
  data: Observable<any>;
  
  query$: Observable<SearchObject>;
  tables$: Observable<Table[]>;
  constructor(private _ts: TableService, private store: Store<fromRoot.State>) {
    this.query$ = store.select(fromRoot.getFilterQuery).take(1);
    this.tables$ = store.select(fromRoot.getFilterResults);
  }

  filter(query: SearchObject) {
    console.log(query);
    this.store.dispatch(new tables.SearchAction(query));
  }

  /*ngOnInit() {
    let filters$: Observable<any> = Observable
        .combineLatest(
            this.tn.valueChanges
              .debounceTime(400)
              //.filter(s => s.length >= 3)
              .distinctUntilChanged(),
            this.fn.valueChanges
              .debounceTime(400)
              //.filter(s => s.length >= 3)
              .distinctUntilChanged(),
            this.sort,
            this.empty.valueChanges,
            (tn, fn, sorta, showEmpty) => Object.assign({}, {tname: tn, fname: fn, sorta: sorta, showEmpty: showEmpty}));

     let send$ = Observable.fromEvent(this.send._elementRef.nativeElement, 'click')
                  .debounceTime(200);
     let entn$ = this.entn
        .filter((evt: KeyboardEvent) => evt.keyCode === 13);
     let enfn$ = this.enfn
        .filter((evt: KeyboardEvent) => evt.keyCode === 13);
     let clicks$: Observable<any> = 
     Observable.merge(
       send$,
       entn$,
       enfn$
     );
     
     clicks$.withLatestFrom(filters$)
     .map(val => val[1])
     .do(s => console.log(s))
     .switchMap(so => this._ts.search(so))
     .subscribe(data => this.data = data);

      clicks$
        .withLatestFrom(filters$)
        .map(val => val[1])
        .subscribe(so => {
          this.highf = so.fname;
          this.hight = so.tname;
        });
      
        
        this.tn.setValue('');
        this.fn.setValue('');
        this.sort.next(true);
        this.empty.setValue(true);
  }*/


}
