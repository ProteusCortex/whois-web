import { Snapshot } from './snapshot';

export class Domain {
	id: number;
	name: string;
	handle: string;
	protonum: string;
	creation: Date;
	expiration: Date;
	last_update: Date;
	registered: boolean;
	snapshots: Snapshot[];
	created_at: Date;
	updated_at: Date;
	version: number;
}
