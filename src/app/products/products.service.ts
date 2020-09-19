import { CreateProductComponent } from './create-product/create-product.component';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  CreateProduct(productBody): Observable<Product> {
    const productUrl = 'http//localhost:3000/products';

    return this.httpClient.post<Product>(productUrl, productBody);
  }

  ViewProduct(productId): Observable<Product> {
    const productUrl = 'http//localhost:3000/product/' + productId;
    return this.httpClient.get<Product>(productUrl);
  }

  UpdateProduct(productId, productBody): Observable<Product> {
    const productUrl = 'http//localhost:3000/products';

    return this.httpClient.put<Product>(productId, productBody);
  }

  DeleteProduct(productId): Observable<Product> {
    const productUrl = 'http//localhost:3000/product/' + productId;
    return this.httpClient.delete<Product>(productId);
  }

  searchCategoryProducts(categoryId): Observable<Product> {
    const productUrl = 'http//localhost:3000/product/' + categoryId;
    return this.httpClient.delete<Product>(categoryId);
  }

  searchDateProducts(dateParam): Observable<Product> {
    const productUrl = 'http//localhost:3000/product/' + dateParam;
    return this.httpClient.delete<Product>(dateParam);
  }
















}
