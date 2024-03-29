import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "@products/components/product/product.component";
import { Product } from '@products/models/product.interface';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html'
})
export class ListComponent {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  private cartService = inject(CartService);
  cart = this.cartService.cart;

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        const parsedProducts: Product[] = products.map((product) => {
          let imageUrl: string = product.images[0];

          if (imageUrl.at(0) === "[") {
            const parsed = JSON.parse(imageUrl);
            imageUrl = parsed;
          }

          return {
            createdAt: new Date().toISOString(),
            id: product.id.toString(),
            imageUrl: imageUrl,
            price: product.price,
            title: product.title,
            description: product.description,
            category: product.category
          };
        });

        this.products.set(parsedProducts);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
