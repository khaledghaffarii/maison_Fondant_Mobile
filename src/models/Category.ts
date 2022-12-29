export class Category {
	public name?: string;
	public description?: string;

	constructor(json: any) {
		if (json) {
			if ('name' in json) {
				this.name = json.name;
			}
			if ('description' in json) {
				this.description = json.description;
			}
		}
	}

	public static Empty() {
		return new Category({});
	}
}
