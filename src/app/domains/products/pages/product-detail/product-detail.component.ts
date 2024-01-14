import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@products/models/product.interface';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  @Input() id?: string;
  product = signal<Product | null>(null);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          let imageUrl: string = product.images[0];

          if (imageUrl.at(0) === "[") {
            const parsed = JSON.parse(imageUrl);
            imageUrl = parsed;
          }

          this.product.set({
            id: product.id.toString(),
            createdAt: new Date().toISOString(),
            imageUrl: imageUrl,
            price: product.price,
            title: product.title,
            description: product.description,
            category: product.category
          });
        }
      });
    }
  }
}
