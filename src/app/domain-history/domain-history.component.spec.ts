import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainHistoryComponent } from './domain-history.component';

describe('DomainHistoryComponent', () => {
	let component: DomainHistoryComponent;
	let fixture: ComponentFixture<DomainHistoryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DomainHistoryComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DomainHistoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
