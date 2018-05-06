export class Abuse{
	constructor(
		public ip_address:string,
		public isWhitelisted:number,
		public category_ip_blacklist:string
		){
	}
}