import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'kow-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	@Output() searched = new EventEmitter<string>();
	faSearch = faSearch;

	searchForm = new FormGroup({
		domain: new FormControl('', [Validators.required, Validators.minLength(4)])
	});

	get domain() { return this.searchForm.get('domain'); }

	search() {
		console.log(this.searchForm.controls.domain.value);
		if (!this.searchForm.controls.domain.valid) { return; }
		this.searched.emit(this.searchForm.controls.domain.value);
	}
}
