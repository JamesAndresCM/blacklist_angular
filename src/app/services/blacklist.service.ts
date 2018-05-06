import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Blacklist } from '../models/blacklist';
import { GLOBAL } from './global';


@Injectable()

export class BlacklistService{

	public url:string;

	constructor(
		public _http: Http
		){

		this.url = GLOBAL.url;
	}

	getBlacklist(){
		return this._http.get(this.url+'blacklist').map(res => res.json());
	}

	addBlacklist(blacklist: Blacklist){
		let json = JSON.stringify(blacklist);
		let params = json;
		let headers = new Headers({'Content-Type':'Application/json'});
		return this._http.post(this.url+'blacklist/new', json, {headers: headers})
			.map(res => res.json());
	}

	delBlacklist(id){
		return this._http.delete(this.url+'blacklist/delete/'+id)
			.map(res => res.json());
	}
}