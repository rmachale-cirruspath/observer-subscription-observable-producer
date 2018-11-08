import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
	constructor(private http: HttpClient) { }

	configUrl = 'assets/robert-data.json';

	getConfig() {
		return this.http.get(this.configUrl);
	}
}
