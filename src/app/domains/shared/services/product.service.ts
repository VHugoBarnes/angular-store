import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductHttpResponse } from '@shared/models/product-http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get<ProductHttpResponse[]>("https://api.escuelajs.co/api/v1/products");
  }
}
