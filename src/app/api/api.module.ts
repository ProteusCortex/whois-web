import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiosService } from './pios.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		PiosService
	]
})
export class ApiModule { }
