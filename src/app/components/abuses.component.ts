import { Component } from '@angular/core';
import  { Router, ActivatedRoute, Params } from '@angular/router';
import { AbuseService } from '../services/abuse.service';
import { Abuse } from '../models/abuse';


@Component({
	selector: 'abuse-list',
	templateUrl: '../views/abuse-list.html',
	providers: [AbuseService]
})

export class AbuseComponent{
	public titulo:string;
	public abuses: Abuse[];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _abuseService: AbuseService
		){
		this.titulo = "abuses";
	}

	ngOnInit(){
		console.log("abuse component");
		this.getAbuse();
	}

	getAbuse(){
		this._abuseService.getAbuse().subscribe(
				result => {
					this.abuses = result;
				},
				error => {
					console.log(<any>error);
				}
			);
	}


	public confirm_del_abuse;

	delConfirmAbuse(id){
		this.confirm_del_abuse = id;
	}

	cancelConfirmAbuse(){
		this.confirm_del_abuse = null;
	}
	
	onDeleteAbuse(id){
		this._abuseService.delAbuse(id).subscribe(
			response => {
				console.log(response);
				if(response.status == "OK"){
					this.getAbuse();
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