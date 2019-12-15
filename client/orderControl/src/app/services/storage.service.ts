import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const PRODUCTS_KEY = 'keys';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage) { }

  addProduct(product: Product): Promise<any> {
    return this.storage.get(PRODUCTS_KEY).then((products: Product[]) => {
      if (products) {
        products.push(product);
        return this.storage.set(PRODUCTS_KEY, products);
      } else {
        return this.storage.set(PRODUCTS_KEY, [product]);
      }
    });
  }

  getProducts(): Promise<Product[]> {
    return this.storage.get(PRODUCTS_KEY);
  }

  updateProduct(product: Product): Promise<any> {
    return this.storage.get(PRODUCTS_KEY).then((products: Product[]) => {
      if (!products || products.length === 0) {
        return null;
      }

      const newProducts: Product[] = [];

      for (const i of products) {
        if (i.id === product.id) {
          newProducts.push(product);
        } else {
          newProducts.push(i);
        }
      }

      return this.storage.set(PRODUCTS_KEY, newProducts);
    });
  }

  deleteProduct(id: number): Promise<Product[]> {
    return this.storage.get(PRODUCTS_KEY).then((products: Product[]) => {
      if (!products || products.length === 0) {
        return null;
      }

      const item: Product[] = [];

      for (const i of products) {
        if (i.id !== id) {
          item.push(i);
        }
      }

      return this.storage.set(PRODUCTS_KEY, item);

    });
  }
}
