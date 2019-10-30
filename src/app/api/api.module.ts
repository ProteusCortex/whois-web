import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PiosService } from './pios.service';
import { SnapshotsService } from './snapshots.service';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		PiosService,
		SnapshotsService
	]
})
export class ApiModule { }
