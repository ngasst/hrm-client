import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableService, SearchObject } from './table';
import { FormControl, CheckboxControlValueAccessor, RadioControlValueAccessor } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import { MdButton } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'sandbox',
  styleUrls: [ './sandbox.component.scss' ],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  data: Observable<any>;
  tn = new FormControl();
  fn = new FormControl();
  sort = new Subject();
  empty = new FormControl();
  highf: Observable<string>;
  hight: Observable<string>;
  @ViewChild('send') send: any;
  entn: Subject<any> = new Subject();
  enfn: Subject<any> = new Subject();
  constructor(private _ts: TableService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing     
  }

  log(val) {
    console.log(val);
  }

  ngOnInit() {
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
  }


}
