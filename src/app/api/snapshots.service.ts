import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { Snapshot } from '../models';

@Injectable()
export class SnapshotsService {
	constructor(private http: HttpClient) { }

	public all(): Observable<Snapshot> {
		return this.http.get(`${env.api}/snapshots?join=domain&join=registrar&join=nameServers`)
			.pipe(map((result: Snapshot) => new Snapshot(result)));
	}
}
