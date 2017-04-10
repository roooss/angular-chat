import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ClanDetails, MemberList, Location, League, IconUrls, BadgeUrls } from '../interfaces/ClanDetails'
import {PlayerDetails, Clan, Spell, Hero, Achievement, Troop} from '../interfaces/PlayerDetails';

@Injectable()
export class CocService {
    private baseUrl: string = 'http://51.140.36.237:4200/api';

    constructor(private http: Http) {
    }

    getClanDetails(): Observable<ClanDetails> {
	let temp = this.http.get(`${this.baseUrl}/clan-details`);
	
	let mapTemp = temp.map((res: Response) => {
	    let tempJson = res.json();
	    let tempObj = <ClanDetails> tempJson;

	    return tempObj;
	}); //.catch(this.handleError);

	return mapTemp;
    }

    getPlayerDetails(playerTag: string): Observable<PlayerDetails> {
	let temp = this.http.get(`${this.baseUrl}/player-details/${playerTag}`);
	
	let mapTemp = temp.map((res: Response) => {
	    let tempJson = res.json();
	    let tempObj = <PlayerDetails> tempJson;

	    return tempObj;
	});

	return mapTemp;
    }

    private handleError (error: Response | any) {
	// In a real world app, you might use a remote logging infrastructure
	let errMsg: string;
	
	if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	} else {
	    errMsg = error.message ? error.message : error.toString();
	}
	
	console.error(errMsg);
	
	return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
	let body = res.json();	
        return body.data || { };
    }

    private getHeaders() {
	let headers = new Headers();

	//headers.append('Accept', 'application/json');
	headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ2MjZhMzFkLWU3M2QtNDNhYy04YzY3LWFjN2NmYjQ3ZDA4OSIsImlhdCI6MTQ5MTYwNDIzMiwic3ViIjoiZGV2ZWxvcGVyL2FkNjBjNDRiLWYwMDAtYjk2NC03OGIyLTQ2NWU0MzE5NWYyYSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjUxLjE0MC4zNi4yMzciXSwidHlwZSI6ImNsaWVudCJ9XX0.kaqUwcR070wHv8r2LlDku5xQlZdkGVVKR1x_qVRCGG_43pDgdl3kv0D7ZrW4bABhMiA99oVOBYqZqszYAXp66w');

	return headers;
    }
}
