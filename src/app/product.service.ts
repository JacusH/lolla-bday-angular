import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, ProductDTO} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "http://localhost:8080/api/product"

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }
  getProducts(productHouse: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productUrl}/${productHouse}`)
  }

  createProduct(product: ProductDTO): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product)
  }

  claimProduct(productName: string): Observable<Product> {
    return this.http.patch<Product>(`${this.productUrl}/${productName}/claim`, {})
  }

  deleteProduct(productName: string): Observable<Product> {
    return this.http.delete<Product>(`${this.productUrl}/${productName}`)
  }
}
