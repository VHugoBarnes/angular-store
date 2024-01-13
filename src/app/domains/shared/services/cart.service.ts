import { Injectable, computed, signal } from '@angular/core';
import { Product } from '@products/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => this.cart().reduce((total, product) => total + product.price, 0));

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(prev => [...prev, product]);
  }
}
