import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import * as layout from '../../actions/layout';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { ResultTable } from '../../models';

@Component({
	selector: 'table-dialog',
	templateUrl: './table-dialog.component.html',
	styleUrls: ['./table-dialog.component.scss']
})

export class TableDialogComponent implements OnInit {
	table$: Observable<any>;
	selectedTableName$: Observable<String>;
	constructor(public dialogRef: MdDialogRef<TableDialogComponent>, private store: Store<fromRoot.State>) {

	}

	ngOnInit() {
		this.table$ = this.store.select(fromRoot.getQueriedTable);
		this.selectedTableName$ = this.store.select(fromRoot.getSelectedTableName);
	 }
}