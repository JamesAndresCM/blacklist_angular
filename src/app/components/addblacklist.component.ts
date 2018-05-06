import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BlacklistService } from '../services/blacklist.service';
import { Blacklist } from '../models/blacklist';


@Component({
	selector: 'add-blacklist',
	templateUrl: '../views/add-blacklist.html',
	providers: [BlacklistService]

})

export class BlacklistAddComponent{
	public titulo:string;
	public blacklist: Blacklist;

	constructor(
			private _blacklistService: BlacklistService,
			private _route: ActivatedRoute,
			private _router: Router
		){
		this.titulo = "Create Blacklist";
		this.blacklist = new Blacklist('','','','','');
	}

	ngOnInit(){
		console.log("component load");
	}

	onSubmit(){
		console.log(this.blacklist);

		this._blacklistService.addBlacklist(this.blacklist).subscribe(
			response => {
				if(response.status == 200){
					this._router.navigate(['/blacklist']);
				}else{
					console.log(response);
				}
			},

			error => {
				console.log(<any>error);
			}

			)
	}

}