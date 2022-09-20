import { Product } from './Product'

export class SimpleDataSource {
  private products: Array<Product>
  constructor() {
    this.products = new Array<Product>(
      new Product(1, 'Samsung S5', 'Mobile', '1000'),
      new Product(1, 'Samsung S5', 'Mobile', '1000'),
      new Product(1, 'Samsung S5', 'Mobile', '1000'),
      new Product(1, 'Samsung S5', 'Mobile', '1000'),
    )
  }
  getProducts(): Product[] {
    return this.products
  }
}
