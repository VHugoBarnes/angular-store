import { Component, signal } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html'
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initialProducts: Product[] = [
      {
        id: uuid(),
        imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
        price: 200,
        title: "Nintendo Switch",
        createdAt: new Date().toISOString()
      },
      {
        id: uuid(),
        imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
        price: 400,
        title: "PlayStation 5",
        createdAt: new Date().toISOString()
      },
      {
        id: uuid(),
        imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
        price: 800,
        title: "PC Gamer",
        createdAt: new Date().toISOString()
      },
      {
        id: uuid(),
        imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
        price: 300,
        title: "XBox Series X",
        createdAt: new Date().toISOString()
      },
    ];

    this.products.set(initialProducts);
  }

  listener(product: Product) {
    console.log(product);
  }
}
