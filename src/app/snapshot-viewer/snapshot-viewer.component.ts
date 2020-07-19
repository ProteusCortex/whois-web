import { Component, OnInit, Input } from '@angular/core';
import { Snapshot } from '../models';

@Component({
	selector: 'kow-snapshot-viewer',
	templateUrl: './snapshot-viewer.component.html',
	styleUrls: ['./snapshot-viewer.component.scss']
})
export class SnapshotViewerComponent implements OnInit {

	@Input() snapshot: Snapshot;

	constructor() { }

	ngOnInit(): void {

	}
}
