import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PiosService } from '../api/pios.service';
import { IPiosResult } from '../interfaces/pios-result.interface';

@Component({
	selector: 'kow-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	result: Observable<IPiosResult>;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pios: PiosService
	) { }

	ngOnInit(): void {
		this.result = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				console.log(params);
				return this.pios.ask(params.get('domain'));
			})
		);

		this.result.subscribe(console.log);
	}

}
