import { Address } from './address';

export class Domain {
	public id: number;
	public name: string;
	public handle: string;
	public protocolNumber: string;
	public creationDate: Date;
	public expirationDate: Date;
	public lastupdate: Date;
	public addresses: Address[];
	public createdAt: Date;
	public updatedAt: Date;
}
