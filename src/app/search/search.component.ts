import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'kow-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	faSearch = faSearch;

	searchForm = new FormGroup({
		domain: new FormControl('', [Validators.required, Validators.minLength(4)])
	});

	get domain() { return this.searchForm.get('domain'); }

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	search() {
		const domain = this.searchForm.controls.domain.value;
		if (!this.searchForm.controls.domain.valid) { return; }
		this.router.navigate(['/results', { domain }]);
	}
}
