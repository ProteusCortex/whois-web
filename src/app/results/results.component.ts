import { Component, Input, OnInit } from '@angular/core';
import { IPiosResult } from '../interfaces/pios-result.interface';

@Component({
	selector: 'kow-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	@Input() results: IPiosResult;

	constructor() { }

	ngOnInit(): void {
		console.log(this.results);
	}

}
