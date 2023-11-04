import { Domain, NameServer, Registrar } from '../models';

export interface IPiosResult {
	domain: Domain;
	registrar: Registrar;
	nameServers: NameServer[];
	isRegistered: boolean;
}
