import { IPiosResult } from '../interfaces/pios-result.interface';
import { Domain } from './domain';
import { Registrar } from './registrar';
import { NameServer } from './name-server';

export class Snapshot implements IPiosResult {
	public id: number;
	public domain: Domain;
	public registrar: Registrar;
	public nameServers: NameServer[];
	public isRegistered: boolean;
	public createdAt: Date;
	public updatedAt: Date;

	public constructor(result: IPiosResult) {
		// This is not a snapshot fetched from the DB,
		// so it has no ID. Make this obvious to all consumers.
		this.id = -1;

		// Save the rest of the properties.
		this.isRegistered = result.isRegistered;
		this.domain = result.domain;
		this.registrar = result.registrar;
		this.nameServers = result.nameServers;

		// The rest should be left null
	}
}
