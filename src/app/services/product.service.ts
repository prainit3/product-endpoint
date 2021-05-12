import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Product } from '../Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  //port location for local server
  private apiUrl = 'http://localhost:3000/products'

  constructor(private http:HttpClient) { }

  //pulls list of existing products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  //adds a new product to the database
  addProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, httpOptions)
  }

  //deletes a product from the database
  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }
}
