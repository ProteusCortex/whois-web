import { SnapshotsService } from './snapshots.service';
import { TestBed } from '@angular/core/testing';

describe('SnapshotsService', () => {
	let service: SnapshotsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SnapshotsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
