import { Domain } from './domain';
import { NameServer } from './name-server';
import { Registrar } from './registrar';

export class Snapshot {
	id: number;
	timestamp: Date;
	registered: boolean;
	nameServers: NameServer[];
	registrar: Registrar;
	domain: Domain;
}
