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

  @Output() addToCart = new EventEmitter();

  addCartHandler() {
    console.log("Clicking from child");
    this.addToCart.emit("Hi, this is a message from the child");
  }
}
