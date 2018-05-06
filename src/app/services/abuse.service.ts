import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Abuse } from '../models/abuse';
import { GLOBAL } from './global';

@Injectable()

export class AbuseService{

	public url:string;

	constructor(
		public _http: Http
		){

		this.url = GLOBAL.url;
	}

	getAbuse(){
		return this._http.get(this.url+'abuse_ips').map(res => res.json());
	}

	getAbuseDetail(id){
		return this._http.get(this.url+'abuse_ip/'+id).map(res => res.json());
	}

	addAbuse(abuse: Abuse){
		let json = JSON.stringify(abuse);
		let params = json;
		let headers = new Headers({'Content-Type':'Application/json'});
		return this._http.post(this.url+'abuse_ip/new', json, {headers: headers})
			.map(res => res.json());
	}

	editAbuse(id , abuse: Abuse){
		let json = JSON.stringify(abuse);
		let headers = new Headers({'Content-Type':'Application/json'});
		return this._http.put(this.url+'abuse_ip/update/'+id, json, {headers: headers})
			.map(res => res.json());
	}

	delAbuse(id){
		return this._http.delete(this.url+'abuse_ip/delete/'+id)
			.map(res => res.json());
	}
}