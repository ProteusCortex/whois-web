import { TestBed } from '@angular/core/testing';

import { PiosService } from './pios.service';

describe('PiosService', () => {
	let service: PiosService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PiosService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
