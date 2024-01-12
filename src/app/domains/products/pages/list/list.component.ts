import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html'
})
export class ListComponent {
  products: Product[] = [
    {
      imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
      price: 200,
      title: "Nintendo Switch"
    },
    {
      imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
      price: 400,
      title: "PlayStation 5"
    },
    {
      imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
      price: 800,
      title: "PC Gamer"
    },
    {
      imageUrl: `https://picsum.photos/500/500?r=${Math.round(Math.random() * 100)}`,
      price: 300,
      title: "XBox Series X"
    },
  ];
}
