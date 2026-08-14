import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Ram', age: 23 },
    { id: 2, name: 'Shyam', age: 24 },
    { id: 3, name: 'Hari', age: 25 },
  ];

  getAllProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
