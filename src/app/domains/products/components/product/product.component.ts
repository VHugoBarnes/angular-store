import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input({ required: true }) product: Product = {
    imageUrl: "",
    price: 0,
    title: ""
  };

  @Output() addToCart = new EventEmitter<Product>();

  addCartHandler() {
    this.addToCart.emit(this.product);
  }
}
