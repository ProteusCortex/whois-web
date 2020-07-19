import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotViewerComponent } from './snapshot-viewer.component';

describe('SnapshotViewerComponent', () => {
	let component: SnapshotViewerComponent;
	let fixture: ComponentFixture<SnapshotViewerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SnapshotViewerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SnapshotViewerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
