import { NgModule } from '@angular/core';
import { DomainsService } from './domains.service';
import { PiosService } from './pios.service';
import { SnapshotsService } from './snapshots.service';

@NgModule({
	declarations: [],
	imports: [],
	providers: [
		PiosService,
		SnapshotsService,
		DomainsService
	]
})
export class ApiModule { }
