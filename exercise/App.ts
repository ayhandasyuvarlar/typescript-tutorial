import { Product } from './Product'
import { ProductSercive } from './ProductService'

let _productService = new ProductSercive()

let result

result = _productService.getProducts()
result = _productService.getById(2)

let p = new Product()

p.name = 'Iphone 12'
p.price = ' 4000'
p.category = 'Phone'
p.id = 2
_productService.saveProduct(p)

result = _productService.getProducts()
result = _productService.getById(2)
console.log(result)
