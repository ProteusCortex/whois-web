import { Component } from '@angular/core';
import { PiosService } from './pios.service';

@Component({
	selector: 'kow-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'whois';

	constructor(private pios: PiosService) { }

	onSearched(domain: string) {
		const result = this.pios.ask(domain);
		result.subscribe(console.log);
	}
}
