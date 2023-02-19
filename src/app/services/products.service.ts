import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProductById(idProduct: number) {
    return this.httpClient.get('https://dummyjson.com/products/' + idProduct);
  }

  getProducts() {
    return this.httpClient.get('https://dummyjson.com/products');
  }
}
