import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'queried-table',
	templateUrl: 'queried-table.component.html',
	styleUrls: ['./queried-table.component.scss']
})

export class QueriedTableComponent implements OnInit {
	@Input() table;
	@Input() name;
	ngOnInit() { }
}