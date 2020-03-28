import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kow-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'whois';

	constructor(private router: Router) { }

	onSearched(domain: string) {
		console.log(`Got search! ${domain}`);
		this.router.navigate(['/results', { domain }]);
	}
}
