import { Category } from './Category';
export class Products {
	public id?: string;
	public name?: string;
	public quantity?: string;
	public price?: number;
	public image?: string;
	public category?: Category;

	constructor(json: any) {
		if (json) {
			if ('_id' in json) {
				this.id = json._id;
			}

			if ('name' in json) {
				this.name = json.name;
			}
			if ('quantity' in json) {
				this.quantity = json.quantity;
			}
			if ('price' in json) {
				this.price = json.price;
			}
			if ('image' in json) {
				this.image = json.image;
			}
			if ('category' in json) {
				let category = [];

				this.category = json.category;
			}
		}
	}

	public static Empty() {
		return new Products({});
	}
}
