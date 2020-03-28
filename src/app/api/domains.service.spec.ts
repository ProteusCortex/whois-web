import { DomainsService } from './domains.service';
import { TestBed } from '@angular/core/testing';

describe('DomainsService', () => {
	let service: DomainsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DomainsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
