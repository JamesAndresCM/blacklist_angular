import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AbuseService } from '../services/abuse.service';
import { Abuse } from '../models/abuse';


@Component({
	selector: 'add-abuse',
	templateUrl: '../views/add-abuse.html',
	providers: [AbuseService]

})

export class AbuseAddComponent{
	public titulo:string;
	public abuse: Abuse;

	constructor(
			private _abuseService: AbuseService,
			private _route: ActivatedRoute,
			private _router: Router
		){
		this.titulo = "Create Abuse";
		this.abuse = new Abuse('',0,'');
	}

	ngOnInit(){
		console.log("component load");
	}

	onSubmit(){
		console.log(this.abuse);

		this._abuseService.addAbuse(this.abuse).subscribe(
			response => {
				if(response.status == 200){
					this._router.navigate(['/abuses']);
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