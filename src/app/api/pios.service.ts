import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { IPiosResult } from '../interfaces/pios-result.interface';

@Injectable({
	providedIn: 'root'
})
export class PiosService {

	constructor(private http: HttpClient) { }

	public ask(domain: string, refresh = false): Observable<IPiosResult> {
		const fresh = refresh ? 'true' : 'false';
		return this.http.get<IPiosResult>(`${env.api}/pios`, { params: { domain, fresh } });
	}
}
