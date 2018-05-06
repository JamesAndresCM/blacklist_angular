export class Blacklist{
	constructor(
		public ip_address:string,
		public central_report:string,
		public status_ip:string,
		public hostname:string,
		public url_central_report:string
		){
	}
}