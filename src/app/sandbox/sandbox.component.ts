import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableService, SearchObject } from './table';
import { FormControl, CheckboxControlValueAccessor, RadioControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
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
  sort = new FormControl();
  empty = new FormControl();
  highf: Observable<string>;
  hight: Observable<string>;
  @ViewChild('send') send: ElementRef;
  @ViewChild('entn') entn: ElementRef;
  @ViewChild('enfn') enfn: ElementRef;
  constructor(private _ts: TableService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing     
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
            this.sort.valueChanges,
            this.empty.valueChanges,
            (tn, fn, sorta, showEmpty) => Object.assign({}, {tname: tn, fname: fn, sorta: typeof sorta === 'string' ? sorta === 'true': sorta, showEmpty: showEmpty}));
        //.switchMap(so => this._ts.search(so));
     
     let entn$ = Observable.fromEvent(this.entn.nativeElement, 'keyup')
        .filter((evt: KeyboardEvent) => evt.keyCode === 13);
     let enfn$ = Observable.fromEvent(this.enfn.nativeElement, 'keyup')
        .filter((evt: KeyboardEvent) => evt.keyCode === 13);
     let clicks$: Observable<any> = 
     Observable.merge(
       Observable.fromEvent(this.send.nativeElement, 'click'),
       entn$,
       enfn$
     );
     

     clicks$.withLatestFrom(filters$)
     .map(val => val[1])
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
        this.sort.setValue(true);
        this.empty.setValue(true);
  }


}
