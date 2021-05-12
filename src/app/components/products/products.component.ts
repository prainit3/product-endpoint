import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from './../../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  //pulls list of products on page load
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products));
  }

  //add a product via product service
  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe((product) => (this.products.push(product)));
  }

  //delete a product via product service
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => (this.products = this.products.filter((t) => t.id !== product.id)));
  }

}
