import { Domain } from './domain';
import { NameServer } from './name-server';
import { Registrar } from './registrar';
import { IPiosResult } from './pios-result';

export class Snapshot {
	id: number;
	timestamp: Date;
	registered: boolean;
	nameServers: NameServer[];
	registrar: Registrar;
	domain: Domain;

	constructor(result?: IPiosResult) {
		Object.assign(this, result);
	}
}
