import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: Product = {
    imageUrl: "",
    price: 0,
    title: ""
  };
}
