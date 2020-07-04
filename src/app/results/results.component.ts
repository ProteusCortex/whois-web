import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PiosService } from '../api/pios.service';
import { IPiosResult } from '../interfaces/pios-result.interface';

@Component({
	selector: 'kow-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	domain: string;
	result = new BehaviorSubject<IPiosResult>(null);
	working = true;
	private piosRequest: Observable<IPiosResult>;

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
			this.working = false;
			return this.result.next(res);
		});
	}

	refresh(): void {
		this.working = true;

		this.pios.ask(this.domain, true)
			.subscribe(res => {
				this.working = false;
				return this.result.next(res);
			});
	}
}
