import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PiosService } from './api/pios.service';
import { SnapshotsService } from './api/snapshots.service';

@Component({
	selector: 'kwi-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = '{ whois.kow }';

	searchForm = new FormGroup({
		domain: new FormControl('', Validators.required)
	});

	constructor(
		private pios: PiosService,
		private snapshots: SnapshotsService
	) { }

	piosen() {
		this.pios.ask(this.searchForm.value.domain)
			.subscribe(res => {
				console.log(res);
			});
	}

	click() {
		this.snapshots.all()
			.subscribe(res => console.log(res));
	}
}
