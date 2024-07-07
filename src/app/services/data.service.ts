import { Injectable } from '@angular/core';
import productsList from '../../assets/data.json';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  products: Product[] = productsList;

  constructor() {}

  getProductById(id: number) {
    return this.products.filter((product) => product.id === id);
  }

  getProductsByCategory(category: string) {
    const productsInCategory = this.products.filter(
      (product) => product.category === category
    );

    const sortByName = productsInCategory.sort((product) =>
      product.name ? -1 : 1
    );

    return sortByName.sort((product) => (product.new ? -1 : 1));
  }
}
