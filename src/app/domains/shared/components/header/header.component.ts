import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../../products/models/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update(prev => !prev);
  }
}
