import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PiosService } from '../api/pios.service';
import { IPiosResult } from '../interfaces/pios-result.interface';
import { Domain, Registrar } from '../models';

@Component({
	selector: 'kow-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	private piosRequest: Observable<IPiosResult>;
	domain: string;
	result = new BehaviorSubject<IPiosResult>(null);

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pios: PiosService
	) { }

	ngOnInit(): void {
		this.piosRequest = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				this.domain = params.get('domain');
				this.result.next(null);
				return this.pios.ask(this.domain);
			})
		);

		this.piosRequest.subscribe(res => {
			console.log(res);
			return this.result.next(res);
		});
	}

}
