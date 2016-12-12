import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/startWith';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import { SearchObject } from '../../models';

@Component({
	selector: 'tables-searcher',
	templateUrl: 'tables-searcher.component.html',
	styleUrls: ['./tables-searcher.component.scss']
})

export class TablesSearcherComponent implements OnInit {
	form: FormGroup;
	fb: FormBuilder = new FormBuilder();
	@Output() search: EventEmitter<any> = new EventEmitter();
	query$: Observable<SearchObject>;
	constructor() {
		this.form = this.fb.group({
			tn: ['', []],
			fn: ['', []],
			sorta: [false, []],
			empty: [true, []]
		});
		
	 }

	ngOnInit() {
		
	}

	execute() {
		let so: SearchObject = Object.assign({}, {fname: this.form.value.fn, tname: this.form.value.tn, showEmpty: this.form.value.empty, sorta: this.form.value.sorta === 'true' ? true : false});
		this.search.emit(so);
	}
}