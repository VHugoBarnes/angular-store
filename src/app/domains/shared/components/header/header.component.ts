import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../../products/models/product.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({ required: true }) cart!: Product[];
  total = signal(0);

  ngOnChanges(changes: SimpleChanges) {
    if (changes["cart"]) {
      this.total.set(this.calcTotal());
    }
  }

  toggleSideMenu() {
    this.hideSideMenu.update(prev => !prev);
  }

  calcTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
