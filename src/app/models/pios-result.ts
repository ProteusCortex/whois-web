import { Domain } from './domain';
import { NameServer } from './name-server';
import { Registrar } from './registrar';

export interface IPiosResult {
	domain: Domain;
	registrar?: Registrar;
	nameServers?: NameServer[];
	registered: boolean;
}
