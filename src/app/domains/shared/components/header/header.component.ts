import { Component, Input, signal } from '@angular/core';
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

  toggleSideMenu() {
    this.hideSideMenu.update(prev => !prev);
  }
}
