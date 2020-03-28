import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Domain } from '../models';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
	selector: 'kow-domain-history',
	templateUrl: './domain-history.component.html',
	styleUrls: ['./domain-history.component.scss']
})
export class DomainHistoryComponent implements OnInit {
	private domain: Domain;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		console.log(this.route.paramMap);
	}

}
