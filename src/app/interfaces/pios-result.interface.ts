import { Domain } from '../models/domain';
import { NameServer } from '../models/name-server';
import { Registrar } from '../models/registrar';

export interface IPiosResult {
	domain: Domain;
	registrar: Registrar;
	nameServers: NameServer[];
	isRegistered: boolean;
}
