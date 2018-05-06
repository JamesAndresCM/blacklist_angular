import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbuseService } from '../services/abuse.service';
import { Abuse } from '../models/abuse';


@Component({
	selector: 'abuse-detail',
	templateUrl: '../views/abuse-detail.html',
	providers: [AbuseService]
})

export class AbuseDetailComponent{
	public abuse: Abuse;

	constructor(
		private _abuseService: AbuseService,
		private _route: ActivatedRoute,
		private _router: Router
		){}


	ngOnInit(){
		console.log("detail abuse");
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

}