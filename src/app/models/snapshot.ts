import { IPiosResult } from '../interfaces/pios-result.interface';
import { Domain } from './domain';
import { Registrar } from './registrar';
import { NameServer } from './name-server';

export class Snapshot implements IPiosResult {
	public domain: Domain;
	public registrar: Registrar;
	public nameServers: NameServer[];
	public isRegistered: boolean;
}
