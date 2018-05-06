import { Component } from '@angular/core';
import  { Router, ActivatedRoute, Params } from '@angular/router';
import { BlacklistService } from '../services/blacklist.service';
import { Blacklist } from '../models/blacklist';


@Component({
	selector: 'blacklist-list',
	templateUrl: '../views/blacklist-list.html',
	providers: [BlacklistService] 

})

export class BlacklistComponent{
	public titulo:string;
	//public blacklists: Blacklist[];
	public data: Blacklist[];
     // array of currently selected entities in the data table
    selectedEntities: any[];

    // function to handle data/entities selected/deselected in the table 
     public setSelectedEntities($event: any) {
        this.selectedEntities = $event;
    }

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _blacklistService: BlacklistService
		){

		this.titulo = 'Blacklist';
	}

	ngOnInit(){
		console.log("blacklist component")
		this.getBlacklist();
	}

	getBlacklist(){
		this._blacklistService.getBlacklist().subscribe(
				result => {
					//console.log(result);
					this.data = result;
				},
				error => {
					console.log(<any>error);
				}
			);
	}

	public confirm;

	delConfirm(id){
		this.confirm = id;
	}

	cancelConfirm(){
		this.confirm = null;
	}
	
	onDeleteBlacklist(id){
		this._blacklistService.delBlacklist(id).subscribe(
			response => {
				console.log(response);
				if(response.status == "OK"){
					this.getBlacklist();
				}else{
					console.log("error not del element...");
				}
			},
			error => {
				console.log(<any>error);
			}

		);
	}

}