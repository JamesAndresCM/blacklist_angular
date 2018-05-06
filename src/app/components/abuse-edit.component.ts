import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbuseService } from '../services/abuse.service';
import { Abuse } from '../models/abuse';

@Component({
	selector: 'abuse-edit',
	templateUrl: '../views/add-abuse.html',
	providers: [AbuseService]
})

export class AbuseEditComponent{
	public titulo:string;
	public abuse: Abuse;

	constructor(
		private _abuseService: AbuseService,
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.titulo = "Edit Abuse";
		this.abuse = new Abuse('',0,'');
	}

	ngOnInit(){
		console.log("edit abuse");
		this.getAbuse();
	}

	getAbuse(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._abuseService.getAbuseDetail(id).subscribe(
				response => {
					this.abuse = response[0];
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

	onSubmit(){
		console.log(this.abuse);
		this.updateAbuse();
	}

	updateAbuse(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
				this._abuseService.editAbuse(id, this.abuse).subscribe(
					response => {
						if(response.status == "OK"){
							this._router.navigate(['/abuse',id]);
						}else{
							console.log(response);
					}
				},
					error => {
						console.log(<any>error);
				}
			);
		});
	}
}