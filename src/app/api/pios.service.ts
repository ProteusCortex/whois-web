import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { Snapshot } from '../models';
import { IPiosResult } from '../models/pios-result';

@Injectable()
export class PiosService {

	constructor(private http: HttpClient) { }

	public ask(domain: string): Observable<Snapshot> {
		return this.http.get(`${env.api}/pios?domain=${domain}`)
			.pipe(map((result: IPiosResult) => new Snapshot(result)));
	}
}
