import { Address } from './address';

export class NameServer {
	public id: number;
	public name: string;
	public addresses: Address[];
	public createdAt: Date;
	public updatedAt: Date;
}
