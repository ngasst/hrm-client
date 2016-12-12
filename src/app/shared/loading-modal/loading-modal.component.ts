import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import * as layout from '../../actions/layout';
import * as fromRoot from '../../reducers';

@Component({
	selector: 'loading-modal',
	templateUrl: './loading-modal.component.html',
	styleUrls: ['./loading-modal.component.scss']
})

export class LoadingModalComponent implements OnInit {
	constructor(public dialogRef: MdDialogRef<LoadingModalComponent>, private store: Store<fromRoot.State>) {

	}

	ngOnInit() {
	 }
}