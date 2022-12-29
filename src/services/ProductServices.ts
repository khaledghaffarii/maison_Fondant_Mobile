import axios from 'axios';
import { apiAdress } from '../utils/constants';
import { PRODUCTS } from '../utils/api';

export class ProductService {
	static _instance: ProductService;

	static getInstance(): ProductService {
		if (!ProductService._instance) {
			ProductService._instance = new ProductService();
		}

		return ProductService._instance!;
	}
	async getAllProducts() {
		try {
			const { data } = await axios.get(apiAdress.baseUrl + PRODUCTS.ALL, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('Products Service error message: ', error.message);
			} else {
				console.log('unexpected error: ', error);
			}
		}
	}
}
