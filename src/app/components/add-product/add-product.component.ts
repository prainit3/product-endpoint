import { Product } from './../../Product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  //list of available properties on a product
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter

    name       : string;
    cost       : number;
    size       : string;
    location_id: number;
    available  : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    //simple verification that product name is not empty
    if(!this.name) {
      alert('Please Add a Product')
      return;
    }

    const newProduct = {
      name: this.name,
      cost: this.cost,
      size: this.size,
      location_id: this.location_id,
      available: this.available
    }

    this.onAddProduct.emit(newProduct);

    this.name='';
    this.cost=0;
    this.size=''
    this.available = false;
  }

}
